import { Component,OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrl: './show-emp.component.css'
})
export class ShowEmpComponent {

  constructor(private service:SharedService) {}
  //declaring types
  EmployeeList: any =[];

  ModalTitle:string | undefined;
  ActivateAddEditEmpComp:boolean=false
  emp:any;


  ngOnInit(): void{
    this.refreshEmpList()
  }

  addClick(){
    this.emp={
      EmployeeId :0,
      EmployeeName :'',
      Department :'',
      DateofJoining:'',
      PhotoFileName:'anonymus.png',

    }
    this.ModalTitle = 'Add Employee'
    this.ActivateAddEditEmpComp=true
  }

  closeClick(){
   this.ActivateAddEditEmpComp=false
   this.refreshEmpList();
  }


  editClick(item: any){
    this.emp = item
    this.ModalTitle='Edit Employee.'
    this.ActivateAddEditEmpComp=true

  }

  deleteClick(item:any){
    if(confirm('Are you sure you want to delete??')){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=> {
        alert(data.toString)
        this.refreshEmpList()
      })
    }
  }

  refreshEmpList(){
    this.service.getDeptList().subscribe(data => {this.EmployeeList= data});
  }

}


