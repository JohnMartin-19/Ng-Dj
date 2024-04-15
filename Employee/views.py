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
        department_data = JSONParser().parse(request)
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
    elif request.method =='DELETE':
        department = Department.objects.get(DepartmentId=id)
        department.delete()
        return JsonResponse('Deleted Successfully')  
    

@csrf_exempt
def employeeApi(request,id=0):
    if request.method == "GET":
        employees = Employee.objects.all()
        employee_serializer = EmployeeSerializer(employees,many = True)
        return JsonResponse(employee_serializer.data,safe=False)
    
    elif request.method == "POST":
        employee_data = JSONParser().parse(request)
        employee_serializer = EmployeeSerializer(data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse('Added Successfully',safe=False)
        return JsonResponse('Failed to Add',safe=False)
    
    elif request.method == 'PUT':
        employee_data = JSONParser().parse(request)
        if 'EmployeeId' not in employee_data:
            return JsonResponse('EmployeeId is required', safe=False, status=400)
        employee = Employee.objects.get(EmployeeId=employee_data['EmployeeId'])
        employee_serializer = EmployeeSerializer(employee,data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse('Updated successfully!',safe=False)
        return JsonResponse('Failed to update',safe=False)
    
    elif request.method =='DELETE':
        employee = Employee.objects.get(EmployeeId=id)
        employee.delete()
    return JsonResponse('Deleted Successfully',safe=False)  