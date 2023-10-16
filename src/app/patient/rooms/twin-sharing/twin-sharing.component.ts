import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RequestServerService } from 'src/app/services/request-server.service';
import { DataUseService } from 'src/app/services/data-use.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-twin-sharing',
  templateUrl: './twin-sharing.component.html',
  styleUrls: ['./twin-sharing.component.css'],
})
export class TwinSharingComponent {
  router = inject(Router);
  du = inject(DataUseService);
  request = inject(RequestServerService);

  profileData = this.du.getPatientProfileData();
  checkarr: any = [];

  bookRoomData: any = {
    pfname: this.profileData[0].fname,
    plname: this.profileData[0].lname,
    pid: this.profileData[0].id,
    rid: 3,
    roomCategory: 'Twin Sharing Room',
  };

  book() {

    if (!this.profileData[0].roomId) {
      this.request.getRoomRequest().subscribe((res) => {
        this.checkarr = res.filter((val: any) => {
          return val.pid == this.bookRoomData.pid;
        });
        if (this.checkarr.length == 0) {
          this.request.postRoomRequest(this.bookRoomData).subscribe((res) => {
            // alert('Request Posted')
            Swal.fire({
              position: 'center',

              icon: 'success',

              title: 'Request sent successfully',

              showConfirmButton: false,

              timer: 1500,
            });
            this.router.navigateByUrl('/patient/patient-home')
          });
        } else {
          //Admin didnot accept or reject the room reqest yet, so patient can update the room request by selecting other category room
          this.request
            .updateRoomRequest(this.checkarr[0].id, this.bookRoomData)
            .subscribe((res) => {
              // alert('Request Updated');
              Swal.fire({
                position: 'center',

                icon: 'success',

                title: 'Request updated',

                showConfirmButton: false,

                timer: 1500,
              });
              this.router.navigateByUrl('/patient/patient-home')
              this.checkarr = [];
            });
        }
      });
    } else {
      //room is already alloted, booking functionality should not be there, so request for room transfer
      Swal.fire({
        title: 'Maybe you want to request a room transfer?',
        text: "You are already in a room!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Transfer room'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Redirecting to Patient's Transfer page...",
          ).then(()=>{

            this.router.navigateByUrl('patient/patient-transfer');
          })
        }else{
          Swal.fire(
            "Redirecting to Home page...",
          ).then(()=>{
            this.router.navigateByUrl('patient/patient-home')
          })
        }
      })
  }}

}
