from rest_framework import serializers
from .models import Payment

class PaymentSerializer(serializers.ModelSerializer):
    project_title = serializers.CharField(source='project.title', read_only=True)
    
    class Meta:
        model = Payment
        fields = '__all__'
