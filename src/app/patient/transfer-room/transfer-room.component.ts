import { Component, OnInit,SimpleChanges,inject } from '@angular/core';
import { Router } from '@angular/router';
import { RequestServerService } from 'src/app/services/request-server.service';
import { DataUseService } from 'src/app/services/data-use.service';
import { LoginRegisterService } from 'src/app/services/login-register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transfer-room',
  templateUrl: './transfer-room.component.html',
  styleUrls: ['./transfer-room.component.css']
})
export class TransferRoomComponent implements OnInit{


  disableBtn :boolean = true;
  router = inject(Router)
  du = inject(DataUseService);
  lr = inject(LoginRegisterService);
  adminServ = inject(RequestServerService);
  profileData = this.du.getPatientProfileData();
  checkarr : any = [];

  transferRoomData : any = {
    pfname : this.profileData[0].fname,
    plname : this.profileData[0].lname,
    pid : this.profileData[0].id,
    page : this.profileData[0].age,
    fromRoom : "",
    fromRoomID : null,
    toRoom : "",
    toRoomID : null
  }

  ngOnInit(): void {
    this.lr.get_patient_details().subscribe(res=>{
      this.profileData = res.filter((val:any)=>{
        return this.profileData[0].id==val.id;
      })
    })
    this.transferRoomData.fromRoom = this.profileData[0].roomName;
  }

  confirmTransfer()
  {
    if(this.transferRoomData.toRoom)
    {
      this.disableBtn=false;
    }
    else
    {
      this.disableBtn=true
    }
  }


  postTransferRequest()
  {
    this.transferRoomData.fromRoomID = this.du.map[this.transferRoomData.fromRoom];
    this.transferRoomData.toRoomID = this.du.map[this.transferRoomData.toRoom];
    this.adminServ.getTransferRequest().subscribe(res=>{
      this.checkarr = res.filter((val:any)=>
      {
        return val.pid == this.transferRoomData.pid;
      })
      if(this.checkarr.length==0)
      {
        this.adminServ.postTransferRequest(this.transferRoomData).subscribe(res=>
        {
          // alert('Transfer Request Sent!');
          Swal.fire({

            position:'center',

            icon:'success',

            title:'Request sent successfully',

            showConfirmButton:false,

            timer:1500

          })
          this.router.navigateByUrl('/patient/patient-home')
        })
      }
      else
      {
        this.adminServ.updateTransferRequest(this.checkarr[0].id,this.transferRoomData).subscribe(res=>
          {
            // alert('Transfer Request Updated!');
            Swal.fire({

              position:'center',

              icon:'success',

              title:'Request updated',

              showConfirmButton:false,

              timer:1500

            })
            this.router.navigateByUrl('/patient/patient-home')
          this.checkarr=[];
        })
      }
    })

  }
}
