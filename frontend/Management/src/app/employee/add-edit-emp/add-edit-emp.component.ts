import { Component,Input,OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrl: './add-edit-emp.component.css'
})
export class AddEditEmpComponent {

  constructor(private service:SharedService){}

  @Input() emp:any;
  EmployeeId:string | undefined;
  EmployeeName:string | undefined;
  Department:string | undefined;
  Date_of_joining:string | undefined;
  PhotoFileName:string|undefined;
  PhotoFilePath:string|undefined;


  DepartmentList:any=[];

  ngOnInit():void{

  }

  loadDepartmentList(){
    this.service.getAllDeparmentNames().subscribe((data:any) => {
      this.DepartmentList = data;
      this.EmployeeId = this.emp.EmployeeId
      this.EmployeeName = this.emp.EmployeeName
      this.Department = this.emp.Department
    })
  }

  addDept(){
    var val = {
      DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName
    }
    this.service.addDept(val).subscribe(res=> {
      alert(res.toString())
    })
  }

  updateDept(){
    var val = {
      DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName
    }
    this.service.updateDept(val).subscribe(res=> {
      alert(res.toString())
    })
  }
}


