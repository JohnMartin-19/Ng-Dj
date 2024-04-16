import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDeptComponent } from './department/show-dept/show-dept.component';
import { AddEditDeptComponent } from './department/add-edit-dept/add-edit-dept.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';



@NgModule({
  declarations: [
    DepartmentComponent,
    ShowDeptComponent,
    AddEditDeptComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent
  ],
  imports: [
    AppComponent,
    CommonModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],  providers:[SharedService],
  bootstrap:[AppComponent]
})
export class AppModule { }
