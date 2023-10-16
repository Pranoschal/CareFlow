import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RequestServerService } from 'src/app/services/request-server.service';
import { DataUseService } from 'src/app/services/data-use.service';
import { LoginRegisterService } from 'src/app/services/login-register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-discharge-room-patient',
  templateUrl: './discharge-room-patient.component.html',
  styleUrls: ['./discharge-room-patient.component.css'],
})
export class DischargeRoomPatientComponent {
  du = inject(DataUseService);
  adminServ = inject(RequestServerService);
  lr = inject(LoginRegisterService);
  router = inject(Router)

  profileData: any = this.du.getPatientProfileData();

  checkarr: any = [];
  dischargeData: any = {
    patientId: this.profileData[0].id,
    name: this.profileData[0].fname + ' ' + this.profileData[0].lname,
    age: this.profileData[0].age,
    roomId: this.profileData[0].roomId,
    roomCategory: this.profileData[0].roomName,
    roomNo: this.profileData[0].roomNo,
  };

  postDischargeRequest() {
    this.adminServ.getDischargeRequest().subscribe((res) => {
      this.checkarr = res.filter((val: any) => {
        return val.patientId == this.dischargeData.patientId;
      });
      if (this.checkarr.length == 0) {
        this.adminServ
          .postDischargeRequest(this.dischargeData)
          .subscribe(() => {
            // alert('Discharge Request Posted');
            Swal.fire({
              position: 'center',

              icon: 'success',

              title: 'Request sent successfully',

              showConfirmButton: false,

              timer: 1500,
            });
            this.router.navigateByUrl('patient/patient-home')

          });
      } else {
        this.adminServ
          .updateDischargeRequest(this.checkarr[0].id, this.dischargeData)
          .subscribe(() => {
            // alert('Discharge Request Updated');
            Swal.fire({
              position: 'center',

              icon: 'success',

              title: 'Request updated',

              showConfirmButton: false,

              timer: 1500,
            });
            this.router.navigateByUrl('patient/patient-home')
          });
      }
    });
  }
}
