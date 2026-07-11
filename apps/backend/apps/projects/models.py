from django.db import models
from django.conf import settings

class Project(models.Model):
    STAGE_CHOICES = (
        ('REQUIREMENT', 'Requirement Collection'),
        ('TOPIC', 'Topic Finalization'),
        ('SYNOPSIS', 'Synopsis Preparation'),
        ('DESIGN', 'UI/UX Design'),
        ('FRONTEND', 'Frontend Development'),
        ('BACKEND', 'Backend Development'),
        ('DATABASE', 'Database Integration'),
        ('TESTING', 'Testing Phase'),
        ('REPORT', 'Report Preparation'),
        ('DEPLOYMENT', 'Deployment'),
        ('DELIVERED', 'Final Delivery'),
    )
    title = models.CharField(max_length=255)
    description = models.TextField()
    technology = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    github_repo = models.CharField(max_length=255, blank=True, null=True, help_text="Format: owner/repo (e.g. PuneethKrishnaS/SoftMade)")
    leader = models.ForeignKey('students.Student', on_delete=models.SET_NULL, null=True, blank=True, related_name='led_projects')
    students = models.ManyToManyField('students.Student', related_name='projects', blank=True)
    assigned_developer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True, related_name='assigned_projects')
    start_date = models.DateField(null=True, blank=True)
    deadline = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=50, choices=STAGE_CHOICES, default='REQUIREMENT')
    progress_percentage = models.IntegerField(default=0)
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    advance_payment = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

    def __str__(self):
        return self.title
