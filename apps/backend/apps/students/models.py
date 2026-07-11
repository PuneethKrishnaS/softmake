from django.db import models
from django.conf import settings

class Student(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='student_profile')
    usn = models.CharField(max_length=50, unique=True)
    college_name = models.CharField(max_length=255, default='')
    department = models.CharField(max_length=255, default='')
    semester = models.IntegerField(default=1)
    phone = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return self.user.get_full_name() or self.user.username
