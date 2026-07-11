from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404

from common.github_services import get_project_releases, get_project_documents, get_project_readme
from apps.students.models import Student
from apps.students.serializers import StudentSerializer
from .models import Project
from .serializers import ProjectSerializer, CreateProjectSerializer

User = get_user_model()

class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    permission_classes = [AllowAny] # Ideally IsAuthenticated

    def get_queryset(self):
        user = self.request.user
        if user.is_authenticated and user.role == 'STUDENT':
            try:
                student = user.student_profile
                return Project.objects.filter(students=student).select_related('assigned_developer').prefetch_related('students')
            except Student.DoesNotExist:
                return Project.objects.none()
        return Project.objects.all().select_related('assigned_developer').prefetch_related('students')

    def get_serializer_class(self):
        if self.action == 'create':
            return CreateProjectSerializer
        return ProjectSerializer
        
    @action(detail=True, methods=['get'])
    def github_releases(self, request, pk=None):
        project = self.get_object()
        if not project.github_repo:
            return Response({"error": "No GitHub repository linked to this project."}, status=status.HTTP_400_BAD_REQUEST)
        
        releases = get_project_releases(project.github_repo)
        return Response(releases)
        
    @action(detail=True, methods=['get'])
    def github_documents(self, request, pk=None):
        project = self.get_object()
        path = request.query_params.get('path', '')
        if not project.github_repo:
            return Response({"error": "No GitHub repository linked to this project."}, status=status.HTTP_400_BAD_REQUEST)
        
        docs = get_project_documents(project.github_repo, path)
        return Response(docs)

    @action(detail=True, methods=['get'])
    def github_readme(self, request, pk=None):
        project = self.get_object()
        if not project.github_repo:
            return Response({"error": "No GitHub repository linked to this project."}, status=status.HTTP_400_BAD_REQUEST)
        
        readme = get_project_readme(project.github_repo)
        if readme is None:
            return Response({"error": "README not found."}, status=status.HTTP_404_NOT_FOUND)
            
        return Response({"content": readme})

    @action(detail=True, methods=['post'])
    def add_student(self, request, pk=None):
        project = self.get_object()
        usn = request.data.get('usn')
        if not usn:
            return Response({"error": "USN is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        if project.students.count() >= 5:
            return Response({"error": "Project already has the maximum of 5 students."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            student = Student.objects.get(usn__iexact=usn)
            if project.students.filter(id=student.id).exists():
                return Response({"error": "Student is already in this project."}, status=status.HTTP_400_BAD_REQUEST)
                
            project.students.add(student)
            return Response({"status": "Student added successfully", "student": StudentSerializer(student).data})
        except Student.DoesNotExist:
            return Response({"error": f"Student with USN {usn} not found"}, status=status.HTTP_404_NOT_FOUND)

    @action(detail=True, methods=['post'])
    def remove_student(self, request, pk=None):
        project = self.get_object()
        usn = request.data.get('usn')
        if not usn:
            return Response({"error": "USN is required"}, status=status.HTTP_400_BAD_REQUEST)
            
        try:
            student = Student.objects.get(usn__iexact=usn)
            if not project.students.filter(id=student.id).exists():
                return Response({"error": "Student is not in this project."}, status=status.HTTP_400_BAD_REQUEST)
                
            project.students.remove(student)
            if project.leader == student:
                project.leader = None
                project.save()
            return Response({"status": "Student removed successfully"})
        except Student.DoesNotExist:
            return Response({"error": f"Student with USN {usn} not found"}, status=status.HTTP_404_NOT_FOUND)

    @action(detail=True, methods=['patch'])
    def set_leader(self, request, pk=None):
        project = self.get_object()
        usn = request.data.get('usn')
        if not usn:
            return Response({"error": "USN is required"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            student = Student.objects.get(usn=usn)
            if student not in project.students.all():
                return Response({"error": f"Student {usn} must be part of the project to be a leader"}, status=status.HTTP_400_BAD_REQUEST)
            project.leader = student
            project.save()
            return Response({"status": "Team leader updated successfully", "leader": StudentSerializer(student).data})
        except Student.DoesNotExist:
            return Response({"error": f"Student with USN {usn} not found"}, status=status.HTTP_404_NOT_FOUND)
