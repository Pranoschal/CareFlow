import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  http = inject(HttpClient);
  //
  isPatientRegistered : boolean = false;
  isPatientLoggedIn : boolean = false;
  isAdminLoggedIn : boolean = false;
  isAdminRegistered:boolean = false;
  constructor() { }


  get_admin_details() : Observable<any>{
    return this.http.get('http://localhost:3000/admin');
  }

  update_admin_details(id:number,data:any):Observable<any>{
    return this.http.patch('http://localhost:3000/admin/'+id,data);
  }

  get_patient_details():Observable<any>{
    return this.http.get('http://localhost:3000/patient');
  }

  post_patient_details(det : any) : Observable<any>{
    return this.http.post('http://localhost:3000/patient',det);
  }

  update_patient_details(id:number,data:any):Observable<any>{
    return this.http.patch('http://localhost:3000/patient/'+id,data);
  }

}
