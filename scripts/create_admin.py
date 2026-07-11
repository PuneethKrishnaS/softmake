import os
import sys
import django

# Add backend directory to path
sys.path.append(os.path.join(os.path.dirname(__file__), '../apps/backend'))

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from django.contrib.auth import get_user_model

User = get_user_model()
if not User.objects.filter(username='admin').exists():
    user = User.objects.create_superuser('admin', 'admin@softmade.com', 'admin123')
    user.role = 'SUPERADMIN'
    user.save()
    print("[SUCCESS] Admin user created successfully! Username: admin, Password: admin123")
else:
    user = User.objects.get(username='admin')
    user.set_password('admin123')
    user.role = 'SUPERADMIN'
    user.is_superuser = True
    user.is_staff = True
    user.save()
    print("[SUCCESS] Admin user already existed, password reset to: admin123")
