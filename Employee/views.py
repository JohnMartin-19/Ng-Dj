from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse 

from .models import Employee,Department
from .serializers import DepartmentSerializer,EmployeeSerializer
# Create your views here.
@csrf_exempt
def departmentApi(request,id=0):
    if request.method == "GET":
        departments = Department.objects.all()
        department_serializer = DepartmentSerializer(departments,many = True)
        return JsonResponse(department_serializer.data,safe=False)
    elif request.method == "POST":
        department_data = Department.objects.all()
        department_serializer = DepartmentSerializer(data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse('Added Successfully',safe=False)
        return JsonResponse('Failed to Add',safe=False)
    elif request.method == 'PUT':
        department_data = JSONParser.parse(request)
        department = Department.objects.get(DepartmentId=department_data['DepartmentId'])
        department_serializer = DepartmentSerializer(department,data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse('Updated successfully!',safe=False)
        return JsonResponse('Failed to update',safe=False)
