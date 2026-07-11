from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StudentViewSet, RegisterStudentView

router = DefaultRouter()
router.register(r'students', StudentViewSet, basename='student')

urlpatterns = [
    path('students/register/', RegisterStudentView.as_view(), name='register_student'),
    path('', include(router.urls)),
]
