from rest_framework import serializers
from apps.accounts.serializers import UserSerializer
from apps.students.serializers import StudentSerializer
from apps.students.models import Student
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    students = StudentSerializer(many=True, read_only=True)
    leader = StudentSerializer(read_only=True)
    assigned_developer = UserSerializer(read_only=True)
    tickets = serializers.SerializerMethodField()
    payments = serializers.SerializerMethodField()
    
    class Meta:
        model = Project
        fields = '__all__'
        
    def get_tickets(self, obj):
        return [
            {
                "id": t.id,
                "title": t.title,
                "status": t.status,
                "priority": t.priority,
                "created_at": t.created_at
            }
            for t in obj.tickets.all()
        ]
        
    def get_payments(self, obj):
        return [
            {
                "id": p.id,
                "amount": p.amount,
                "description": p.description,
                "status": p.status,
                "due_date": p.due_date,
                "paid_date": p.paid_date,
                "transaction_id": p.transaction_id
            }
            for p in obj.payments.all()
        ]

class CreateProjectSerializer(serializers.ModelSerializer):
    leader_usn = serializers.CharField(write_only=True)

    class Meta:
        model = Project
        fields = ['title', 'description', 'technology', 'category', 'status', 'leader_usn', 'assigned_developer', 'start_date', 'deadline', 'github_repo', 'total_price', 'advance_payment']

    def validate_leader_usn(self, value):
        try:
            student = Student.objects.get(usn=value)
            return value
        except Student.DoesNotExist:
            raise serializers.ValidationError("Student with this USN does not exist.")

    def create(self, validated_data):
        leader_usn = validated_data.pop('leader_usn')
        student = Student.objects.get(usn=leader_usn)
        project = super().create(validated_data)
        project.leader = student
        project.students.add(student)
        project.save()
        return project
