import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'http://127.0.0.1:8000';
  readonly PhotoUrl = 'http://127.0.0.1:8000/media/'

  constructor(private http:HttpClient) {}
  //Consuming Department API
  getDeptList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +  '/department/');
  }

  addDept(val:any){
    return this.http.post(this.APIUrl + '/department/',val)
  }

  updateDept(val:any){
    return this.http.put(this.APIUrl + '/department/',val)
  }


  deleteDept(val:any){
    return this.http.delete(this.APIUrl + '/department/'+val)
  }

  // Employee API Consuming
  getEmployeeList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl +  '/employee/');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl + '/employee/',val)
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl + '/employee/',val)
  }


  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl + '/employee/'+val)
  }

  //Profile Pic Api method
  uploadImage(val:any){
    return this.http.post(this.APIUrl + '/savefile/', val);
  }

  getAllDepartmentsNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/department/')
  }

}
