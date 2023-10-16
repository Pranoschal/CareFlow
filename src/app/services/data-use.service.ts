import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataUseService {

  constructor() { }

  //storing patient info here
  patientprofileData : any = null;
  //storing Admin info here
  adminProfileData : any = null;


  patientAllocateData : any = null;

  showAdditionFields : boolean = false;

  //method for fetching patient info
   getPatientProfileData():any{
    return this.patientprofileData;
  }

  //method for storing patient data
  setPatientProfileData(data : any){
    this.patientprofileData = data
  }

  //method for fetching admin info
  getAdminProfileData():any{
    return this.adminProfileData;
  }

  //method for storing patient data
  // setAdminProfileData(data : any){
  //   this.adminProfileData = data
  // }


  // setPAtientAllocationData(data : any){
  //   this.patientAllocateData = data
  // }


  // getPatientAllocationData():any{
  //   return this.patientAllocateData;
  // }

  //profile additional fields
  toggleAdditionalFields()
  {
    this.showAdditionFields = !this.showAdditionFields;
  }

  //for mapping in transfer room req in the dropdown mnu
  map : {[id:string]:number} = {
    "Economy Room" : 1,
    "Economy Plus Room" : 2,
    "Twin Sharing Room" : 3,
    "Deluxe Room" : 4,
    "Premium Deluxe Room" : 5
  };

}
