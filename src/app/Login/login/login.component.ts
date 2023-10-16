import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataUseService } from 'src/app/services/data-use.service';
import { LoginRegisterService } from 'src/app/services/login-register.service';
import { logobj } from 'src/server/logincheck';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  router = inject(Router);
  fb = inject(FormBuilder);
  //form validation
  login_form = this.fb.group({
    email : ['',Validators.required],
    password : ['',Validators.required],
    user : ['',Validators.required]
  })


  // lv = inject(LoginRegisterService)
  select_user_value : number = 0;
  lr = inject(LoginRegisterService);
  du = inject(DataUseService);

  //storing data comming from the from using ngModel
  logdet : logobj = {
      email : "",
      password : ""
  }


  //Array for storing patient/admin after filtering the whole patient/admin array
  check_arr : any = [];

  //login action
  logincheck()
  {

    if(this.select_user_value !=0 )
    {
      //selected patient as a user
      if(this.select_user_value==1)
      {
        this.lr.get_patient_details().subscribe(res=>{
          this.check_arr = res.filter((ele:any)=>{
            return ele.email==this.logdet.email && ele.password==this.logdet.password
          })
          if(this.check_arr.length!=0)
          {
            this.lr.isPatientLoggedIn=true;
            //adding info to the patient profile after fetching then validating (performed above)
            this.du.setPatientProfileData(this.check_arr);
            //alert
            Swal.fire({
              position:'center',
              icon:'success',
              title:'Logged in successfully, redirecting to home page...',
              showConfirmButton:false,
              timer:1500
            })

            this.router.navigateByUrl('patient/patient-home');
          }
          else
          {
            // alert('Incorrect Username or Password');
            Swal.fire({

              title: 'Error!',

              text: 'Incorrect Username or Password',

              icon: 'error',

              confirmButtonText: 'Retry',

              confirmButtonColor: 'red'

            })
          }
        })
      }
      else if(this.select_user_value==2)
      {
      this.lr.get_admin_details().subscribe(res=>{
        this.check_arr=res.filter((ele : any) => {
          return ele.email==this.logdet.email && ele.password==this.logdet.password
        });
        if(this.check_arr.length!=0){
          this.lr.isAdminLoggedIn = true;
          //alert
          Swal.fire({

            position:'center',

            icon:'success',

            title:'Logged in successfully, redirecting to home page...',

            showConfirmButton:false,

            timer:1500

          })
          this.router.navigateByUrl('admin/admin-home');
        }
        else
        {
          // alert('Incorrect Username or Password');
          Swal.fire({

            title: 'Error!',

            text: 'Incorrect Username or Password',

            icon: 'error',

            confirmButtonText: 'Retry',

            confirmButtonColor: 'red'

          })
        }
      })
      }
    }
    else
    {
      // alert('Select User Option')
      Swal.fire({

        title: 'Error!',

        text: 'Select User',

        icon: 'error',

        confirmButtonText: 'Retry',

        confirmButtonColor: 'red'

      })
    }
  }
}
