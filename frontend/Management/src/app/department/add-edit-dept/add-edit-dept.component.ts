import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-add-edit-dept',
  templateUrl: './add-edit-dept.component.html',
  styleUrl: './add-edit-dept.component.css'
})
export class AddEditDeptComponent {

  constructor(){}

  @Input() dep:any;
  DepartmentId:string | undefined;
  DepartmentName:string | undefined;

  ngOnInit():void{
    this.DepartmentId=this.dep.DepartmentId;
    this.DepartmentName=this.dep.DepartmentName;
  }
}
