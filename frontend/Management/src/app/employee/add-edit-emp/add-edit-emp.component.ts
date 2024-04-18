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
    this.service.getAllDepartmentsNames().subscribe((data:any) => {
      this.DepartmentList = data;
      this.EmployeeId = this.emp.EmployeeId
      this.EmployeeName = this.emp.EmployeeName
      this.Department = this.emp.Department
      this.Date_of_joining=this.emp.Date_of_joining
      this.PhotoFileName=this.emp.PhotoFileName
      this.PhotoFilePath=this.service.PhotoUrl+this.emp.PhotoFilePath
    })
  }

  addEmployee(){
    var val = {
      EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Department:this.Department,
      Date_of_joining:this.Date_of_joining,
      PhotoFileName:this.PhotoFileName,

    }
    this.service.addEmployee(val).subscribe(res=> {
      alert(res.toString())
    })
  }

  updateEmployee(){
    var val = {
      EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Department:this.Department,
      Date_of_joining:this.Date_of_joining,
      PhotoFileName:this.PhotoFileName,
    }
    this.service.updateEmployee(val).subscribe(res=> {
      alert(res.toString())
    })
  }

  uploadPhoto(e:any){
    var file = e.target.files[0];
    const formData:FormData=new FormData()
    formData.append('UploadedFile',file,file.name);

    this .service.uploadImage(formData).subscribe((data:any) => {
      this.PhotoFileName=data.toString();
      this.PhotoFilePath= this.service.PhotoUrl+this.PhotoFileName;
    })
  }
}


