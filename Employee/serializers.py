from rest_framework import serializers
from .models import Department,Employee

class DepartmentSrializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ('DepartmentId','DepartmentName')

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('EmployeeId','EmployeeName','Department','PhotoFileName','Date_of_joining')