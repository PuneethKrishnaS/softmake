from rest_framework import serializers
from apps.accounts.serializers import UserSerializer
from django.contrib.auth import get_user_model
from .models import Student

User = get_user_model()

class StudentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = Student
        fields = '__all__'

class CreateStudentSerializer(serializers.Serializer):
    full_name = serializers.CharField(max_length=150)
    email = serializers.EmailField()
    contact_number = serializers.CharField(max_length=20)
    usn = serializers.CharField(max_length=50)
    college_name = serializers.CharField(max_length=255)
    branch = serializers.CharField(max_length=100, required=False, allow_blank=True)
    semester = serializers.IntegerField(required=False, default=1)
    password = serializers.CharField(write_only=True)

    def validate_usn(self, value):
        username = value.lower()
        if User.objects.filter(username=username).exists():
            raise serializers.ValidationError(f"A student with USN '{value}' is already registered.")
        return value

    def create(self, validated_data):
        username = validated_data['usn'].lower()
        user = User.objects.create_user(
            username=username,
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['full_name'],
            role='STUDENT'
        )

        student = Student.objects.create(
            user=user,
            usn=validated_data['usn'],
            college_name=validated_data['college_name'],
            department=validated_data.get('branch', ''),
            semester=validated_data.get('semester', 1),
            phone=validated_data['contact_number']
        )
        return student
