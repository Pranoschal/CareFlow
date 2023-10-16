import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { registrationDetail } from 'src/server/registrationDetails';
import { LoginRegisterService } from '../services/login-register.service';
import { Router } from '@angular/router';
import { DataUseService } from '../services/data-use.service';
import { passwordValidator } from 'src/app/validation/passwordValidator';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  router = inject(Router);
  fb = inject(FormBuilder);
  lr = inject(LoginRegisterService);
  du = inject(DataUseService);

  signup_form = this.fb.group({
    fname : ['',Validators.required],
    lname : ['',Validators.required],
    contact : ['',[Validators.required,Validators.pattern('[0-9]{10}')]],
    email : ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]],
    pass : ['',[Validators.required,passwordValidator()]],
    bloodGroup:['',Validators.required]

  })

  registered:registrationDetail = {
    fname: "",
    lname: "",
    age: null,
    contact: null,
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: null,
    bloodGroup: ""
  }

  typed : boolean = false;

  checkarr : any = [];

  check_email_taken(){
    this.lr.get_patient_details().subscribe(res=>{
      this.checkarr = res.filter((val:any)=>{
        return this.registered.email==val.email;
      })

      if(this.checkarr.length!=0)
      {
        this.lr.isPatientRegistered=true
        this.checkarr = [];
      }
      else{
        this.lr.isPatientRegistered=false;
      }

    })
}


  onSignup(){
    this.lr.post_patient_details(this.registered).subscribe(res=>{
      // alert('Registered Successfully,Redirecting To Login Page.....');
      Swal.fire({

        position:'center',

        icon:'success',

        title:'Registered Successfully,Redirecting To Login Page',

        showConfirmButton:false,

        timer:1500

      })
      this.router.navigateByUrl('/login');
    })
  }

}
