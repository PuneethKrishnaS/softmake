import os
import sys
import django
from datetime import date

# Add backend directory to path
sys.path.append(os.path.join(os.path.dirname(__file__), '../apps/backend'))

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from django.contrib.auth import get_user_model
from apps.students.models import Student
from apps.projects.models import Project
from apps.tickets.models import Ticket, TicketMessage
from apps.payments.models import Payment

User = get_user_model()

def seed():
    print("Seeding database...")
    
    # 1. Create Developer
    dev_user, created = User.objects.get_or_create(
        username='dev_john',
        defaults={
            'email': 'john.dev@softmade.com',
            'first_name': 'John',
            'last_name': 'Developer',
            'role': 'DEVELOPER',
            'is_staff': True
        }
    )
    if created:
        dev_user.set_password('dev123')
        dev_user.save()
        print("[SUCCESS] Developer created (dev_john/dev123)")

    # 2. Create Student User
    student_user, created = User.objects.get_or_create(
        username='1rv22cs001',
        defaults={
            'email': 'sam@rvce.edu',
            'first_name': 'Sam',
            'last_name': 'Student',
            'role': 'STUDENT'
        }
    )
    if created:
        student_user.set_password('student123')
        student_user.save()
        print("[SUCCESS] Student user created (1rv22cs001/student123)")

    # 3. Create Student Profile
    student_profile, created = Student.objects.get_or_create(
        user=student_user,
        defaults={
            'usn': '1RV22CS001',
            'college_name': 'RV College of Engineering',
            'department': 'Computer Science',
            'semester': 6,
            'phone': '9876543210'
        }
    )
    if created:
        print("[SUCCESS] Student profile created")

    # 4. Create Project
    project, created = Project.objects.get_or_create(
        title='Softmade SaaS Platform',
        defaults={
            'description': 'Designing and implementing a production-grade modular monorepo platform.',
            'technology': 'Django Rest Framework, React, PostgreSQL',
            'category': 'Web Application',
            'github_repo': 'PuneethKrishnaS/SoftMade',
            'leader': student_profile,
            'assigned_developer': dev_user,
            'start_date': date(2026, 1, 1),
            'deadline': date(2026, 8, 30),
            'status': 'FRONTEND',
            'progress_percentage': 50,
            'total_price': 15000.00,
            'advance_payment': 5000.00
        }
    )
    if created:
        project.students.add(student_profile)
        project.save()
        print("[SUCCESS] Sample project created")

    # 5. Create Ticket
    ticket, created = Ticket.objects.get_or_create(
        title='WebSocket Authentication Issue',
        defaults={
            'student': student_profile,
            'project': project,
            'description': 'WebSocket connection drops on refresh tokens rotation. Needs JWT verification fix.',
            'priority': 'HIGH',
            'status': 'OPEN'
        }
    )
    if created:
        print("[SUCCESS] Support ticket created")
        
    # 6. Create Payment Milestones
    Payment.objects.get_or_create(
        project=project,
        amount=5000.00,
        defaults={
            'description': 'Advance Payment Signoff',
            'status': 'PAID',
            'due_date': date(2026, 1, 5),
            'paid_date': date(2026, 1, 5),
            'transaction_id': 'TXN100203040'
        }
    )
    
    Payment.objects.get_or_create(
        project=project,
        amount=10000.00,
        defaults={
            'description': 'Final Delivery Milestone',
            'status': 'PENDING',
            'due_date': date(2026, 8, 30)
        }
    )
    print("[SUCCESS] Payment milestones seeded")
    print("Database seeding completed successfully!")

if __name__ == '__main__':
    seed()
