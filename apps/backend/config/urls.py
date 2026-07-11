from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('apps.accounts.urls')),
    path('api/', include('apps.students.urls')),
    path('api/', include('apps.projects.urls')),
    path('api/', include('apps.tickets.urls')),
    path('api/', include('apps.payments.urls')),
]
