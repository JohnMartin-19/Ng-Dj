import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';



//setting routes
const routes: Routes = [
  {path: 'employee', component: EmployeeComponent },
  {path: 'department', component:DepartmentComponent}
];

@NgModule({
  //declarations: [EmployeeComponent,DepartmentComponent],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
