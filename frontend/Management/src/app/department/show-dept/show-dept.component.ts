import { Component,OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-show-dept',
  templateUrl: './show-dept.component.html',
  styleUrl: './show-dept.component.css'
})
export class ShowDeptComponent {
  constructor(private service:SharedService) {}

  DepartmentList: any =[];

  ModalTitle:string | undefined;
  ActivateAddEditDepComp:boolean=false
  dep:any;


  ngOnInit(): void{
    this.refreshDeptList()
  }

  addClick(){
    this.dep={
      DepartmentId :0,
      DepartmentName :''
    }
    this.ModalTitle = 'Add Dept'
    this.ActivateAddEditDepComp=true
  }

  closeClick(){
   this.ActivateAddEditDepComp=false
   this.refreshDeptList();
  }


  editClick(item: any){
    this.dep = item
    this.ModalTitle='Edit Dept.'
    this.ActivateAddEditDepComp=true

  }

  refreshDeptList(){
    this.service.getDeptList().subscribe(data => {this.DepartmentList= data});
  }

}
