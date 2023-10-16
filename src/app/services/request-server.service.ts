import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestServerService {

  constructor(private http: HttpClient) { }

  roomsURL="http://localhost:3500/rooms";
  roomRequestURL="http://localhost:3001/patient_room_requests";
  transferRequestURL="http://localhost:3001/patient_transfer_room_requests"
  dischargeRequestURL="http://localhost:3001/patient_discharge_requests"

  //getting all rooms info for displaying room is availabel or not
  getAllRooms(): Observable<any> {
    return this.http.get(this.roomsURL);
  }


  getRooms(id: number): Observable<any> {
    return this.http.get(`${this.roomsURL}/${id}`);
  }
  updateRooms(data: any, id: number): Observable<any> {
    return this.http.patch(`${this.roomsURL}/${id}`, data);
  }




  getRoomRequest():Observable<any>
  {
    return this.http.get(this.roomRequestURL);
  }
  postRoomRequest(data: any): Observable<any> {
    return this.http.post(this.roomRequestURL, data);
  }
  updateRoomRequest(id:number,data:any):Observable<any>{
    return this.http.patch(`${this.roomRequestURL}/${id}`,data);
  }
  deleteRoomRequest(id:number): Observable<any>
  {
    return this.http.delete(`${this.roomRequestURL}/${id}`);
  }


  getTransferRequest():Observable<any>
  {
    return this.http.get(this.transferRequestURL);
  }
  postTransferRequest(data:any):Observable<any>
  {
    return this.http.post(this.transferRequestURL,data);
  }
  updateTransferRequest(id:number,data:any):Observable<any>
  {
    return this.http.patch(`${this.transferRequestURL}/${id}`,data)
  }
  deleteTransferRequest(id:number):Observable<any>
  {
    return this.http.delete(`${this.transferRequestURL}/${id}`);
  }


  getDischargeRequest():Observable<any>
  {
    return this.http.get(this.dischargeRequestURL);
  }
  postDischargeRequest(data:any):Observable<any>
  {
    return this.http.post(this.dischargeRequestURL,data);
  }
  updateDischargeRequest(id:number,data:any)
  {
    return this.http.patch(`${this.dischargeRequestURL}/${id}`,data);
  }
  deleteDischargeRequest(id:number)
  {
    return this.http.delete(`${this.dischargeRequestURL}/${id}`);
  }
}
