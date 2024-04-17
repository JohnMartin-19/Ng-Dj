import { Component,OnInit,Input } from '@angular/core';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-add-edit-dept',
  templateUrl: './add-edit-dept.component.html',
  styleUrl: './add-edit-dept.component.css'
})
export class AddEditDeptComponent {

  constructor(private service:SharedService){}

  @Input() dep:any;
  DepartmentId:string | undefined;
  DepartmentName:string | undefined;

  ngOnInit():void{
    this.DepartmentId=this.dep.DepartmentId;
    this.DepartmentName=this.dep.DepartmentName;
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
