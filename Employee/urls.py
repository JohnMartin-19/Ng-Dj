
from django.urls import path
from .views import departmentApi


urlpatterns = [
    path('departments/', departmentApi, name='department_list'),
    path('departments/<int:id>/', departmentApi, name='department_detail'),
]