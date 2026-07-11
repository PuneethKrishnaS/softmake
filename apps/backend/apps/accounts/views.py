from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from .serializers import UserSerializer

User = get_user_model()

class CurrentUserView(APIView):
    """
    Returns the currently authenticated user and their associated student profile (if any).
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        data = UserSerializer(user).data
        if user.role == 'STUDENT':
            try:
                # Dynamic imports to prevent circular dependency
                from apps.students.models import Student
                from apps.students.serializers import StudentSerializer
                student = user.student_profile
                data['student_profile'] = StudentSerializer(student).data
            except Student.DoesNotExist:
                pass
        return Response(data)

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
