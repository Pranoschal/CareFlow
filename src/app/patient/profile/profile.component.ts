import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { AdminServeService } from 'src/app/services/request-server.service';
import { DataUseService } from 'src/app/services/data-use.service';
import { LoginRegisterService } from 'src/app/services/login-register.service';
import { registrationDetail } from 'src/server/registrationDetails';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  constructor(){};
  du=inject(DataUseService);
  profileData : any = this.du.getPatientProfileData();
  fb = inject(FormBuilder);
  lr = inject(LoginRegisterService);

  edit_form = this.fb.group({
    fname : ['',Validators.required],
    lname : ['',Validators.required],
    age : [''],
    contact : ['',[Validators.required,Validators.pattern('[0-9]{10}')]],
    email : ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]],
    pass : ['',[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$')]],
    address : [''],
    city : [''],
    state : [''],
    country : [''],
    pincode : [''],
    bloodGroup:['']
  })




  registered:registrationDetail = {
    fname: this.profileData[0].fname ,
    lname: this.profileData[0].lname,
    age: this.profileData[0].age,
    contact : this.profileData[0].contact,
    email : this.profileData[0].email,
    password : this.profileData[0].password,
    address: this.profileData[0].address,
    city : this.profileData[0].city,
    state : this.profileData[0].state,
    country : this.profileData[0].country,
    pincode : this.profileData[0].pincode,
    bloodGroup: this.profileData[0].bloodGroup
  }


  checkarr : any = [];

  check_email_taken(){
    this.lr.get_patient_details().subscribe(res=>{
      this.checkarr = res.filter((val:any)=>{
        return this.registered.email==val.email;
      })

      if(this.checkarr.length!=0)
      {
        if(this.registered.email==this.profileData[0].email)
        {
          this.lr.isPatientRegistered=false;
        }
        else
        {
          this.lr.isPatientRegistered=true
          this.checkarr = [];
        }
      }
      else{
        this.lr.isPatientRegistered=false;
      }
    })
}

onEditFinish(){
 this.lr.update_patient_details(this.profileData[0].id,this.registered).subscribe(res=>{
    this.profileData[0] = res;
 });
}


}
