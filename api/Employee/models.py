from django.db import models

# Create your models here.
class Department(models.Model):
    DepartmentId = models.AutoField(primary_key= True)
    DepartmentName = models.CharField(max_length=100)

class Employee(models.Model):
    EmployeeId = models.AutoField(primary_key=True)
    EmployeeName = models.CharField(max_length=100)
    Department = models.CharField(max_length=100)
    Date_of_joining = models.DateField()
    PhotoFileName = models.CharField(max_length=100)