from rest_framework import viewsets, generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from .models import Student
from .serializers import StudentSerializer, CreateStudentSerializer

class RegisterStudentView(generics.CreateAPIView):
    """
    Endpoint for Admin to register a new Student.
    """
    serializer_class = CreateStudentSerializer
    permission_classes = [AllowAny] # In production, this should be IsAuthenticated & IsAdminUser

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        student = serializer.save()
        response_serializer = StudentSerializer(student)
        return Response(response_serializer.data, status=status.HTTP_201_CREATED)

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all().select_related('user')
    serializer_class = StudentSerializer
    permission_classes = [AllowAny]

    @action(detail=False, methods=['get'])
    def get_by_usn(self, request):
        usn = request.query_params.get('usn')
        if not usn:
            return Response({"error": "USN parameter is required"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            student = Student.objects.get(usn__iexact=usn)
            return Response(StudentSerializer(student).data)
        except Student.DoesNotExist:
            return Response({"error": "Student not found"}, status=status.HTTP_404_NOT_FOUND)
