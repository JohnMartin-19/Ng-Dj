
from django.urls import path
from .views import departmentApi,employeeApi,SaveFile
from django.conf.urls.static import  static
from django.conf import settings

urlpatterns = [
    path('departments/', departmentApi, name='department_list'),
    path('departments/<int:id>/', departmentApi, name='department_detail'),
    path('employees/', employeeApi, name='employee_list'),
    path('employees/<int:id>/', employeeApi, name='employee_detail'),
    path('savefile/', SaveFile,name='savefile')
] + static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)