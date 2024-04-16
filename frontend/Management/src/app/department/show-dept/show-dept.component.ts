import { Component,OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-show-dept',
  templateUrl: './show-dept.component.html',
  styleUrl: './show-dept.component.css'
})
export class ShowDeptComponent {
  constructor(private service:SharedService) {}

  DepartmentList: any =[]

  ngOnInit(): void{
    this.refreshDeptList()
  }

  refreshDeptList(){
    this.service.getDeptList().subscribe(data => {this.DepartmentList= data});
  }

}
