from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404

from apps.students.models import Student
from apps.projects.models import Project
from common.github_services import upload_file_to_github, get_github_client
from .models import Ticket
from .serializers import TicketSerializer

class TicketViewSet(viewsets.ModelViewSet):
    serializer_class = TicketSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.is_authenticated and user.role == 'STUDENT':
            try:
                student = user.student_profile
                from django.db.models import Q
                return Ticket.objects.filter(
                    Q(student=student) | Q(project__students=student) | Q(project__leader=student)
                ).distinct().select_related('student', 'project').order_by('-created_at')
            except Student.DoesNotExist:
                return Ticket.objects.none()
        return Ticket.objects.all().select_related('student', 'project').order_by('-created_at')

    def perform_create(self, serializer):
        project_id = self.request.data.get('project')
        student_id = self.request.data.get('student')
        project = get_object_or_404(Project, id=project_id) if project_id else None
        
        user = self.request.user
        if user.role == 'STUDENT':
            student = user.student_profile
        else:
            student = get_object_or_404(Student, id=student_id) if student_id else None
            
        serializer.save(student=student, project=project)

    def perform_update(self, serializer):
        old_status = serializer.instance.status
        instance = serializer.save()
        if old_status != instance.status:
            from channels.layers import get_channel_layer
            from asgiref.sync import async_to_sync
            channel_layer = get_channel_layer()
            async_to_sync(channel_layer.group_send)(
                f'ticket_{instance.id}',
                {
                    'type': 'status_update',
                    'status': instance.status
                }
            )

    @action(detail=True, methods=['post'])
    def upload_attachment(self, request, pk=None):
        import time
        ticket = self.get_object()
        file_obj = request.FILES.get('file')
        if not file_obj:
            return Response({"error": "No file provided."}, status=status.HTTP_400_BAD_REQUEST)
            
        if not ticket.project or not ticket.project.github_repo:
            return Response({"error": "No GitHub repository linked to this project."}, status=status.HTTP_400_BAD_REQUEST)
            
        file_bytes = file_obj.read()
        safe_name = f"{int(time.time())}_{file_obj.name.replace(' ', '_')}"
        
        download_url, error_msg = upload_file_to_github(ticket.project.github_repo, safe_name, file_bytes)
        if not download_url:
            return Response({
                "error": "Failed to upload file to GitHub.",
                "details": error_msg or "Check if your GITHUB_TOKEN has write ('repo') permissions."
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
        # Return the safe name to construct the proxy URL on the frontend
        return Response({"safe_name": safe_name, "file_name": file_obj.name})

    @action(detail=True, methods=['get'])
    def attachment(self, request, pk=None):
        import mimetypes
        from django.http import HttpResponse
        
        ticket = self.get_object()
        name = request.query_params.get('name')
        if not name or not ticket.project or not ticket.project.github_repo:
            return Response({"error": "Invalid request."}, status=status.HTTP_400_BAD_REQUEST)
            
        client = get_github_client()
        if not client:
            return Response({"error": "GitHub client not configured."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
        try:
            repo = client.get_repo(ticket.project.github_repo)
            content_file = repo.get_contents(f"uploads/tickets/{name}")
            file_bytes = content_file.decoded_content
            
            content_type, _ = mimetypes.guess_type(name)
            response = HttpResponse(file_bytes, content_type=content_type or 'application/octet-stream')
            response['Content-Disposition'] = f'inline; filename="{name}"'
            return response
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_404_NOT_FOUND)
