from rest_framework import serializers
from apps.students.serializers import StudentSerializer
from apps.projects.serializers import ProjectSerializer
from .models import Ticket, TicketMessage

class TicketMessageSerializer(serializers.ModelSerializer):
    sender_name = serializers.SerializerMethodField()
    sender_role = serializers.CharField(source='sender.role', read_only=True)

    class Meta:
        model = TicketMessage
        fields = ['id', 'ticket', 'sender', 'sender_name', 'sender_role', 'message', 'is_read', 'created_at']

    def get_sender_name(self, obj):
        return obj.sender.get_full_name() or obj.sender.username

class TicketSerializer(serializers.ModelSerializer):
    student = StudentSerializer(read_only=True)
    project = ProjectSerializer(read_only=True)
    messages = TicketMessageSerializer(many=True, read_only=True)
    
    class Meta:
        model = Ticket
        fields = '__all__'
