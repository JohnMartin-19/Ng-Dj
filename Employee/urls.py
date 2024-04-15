
from django.urls import path
from .views import departmentApi,employeeApi


urlpatterns = [
    path('departments/', departmentApi, name='department_list'),
    path('departments/<int:id>/', departmentApi, name='department_detail'),
    path('employees/', employeeApi, name='employee_list'),
    path('employees/<int:id>/', employeeApi, name='employee_detail'),

]