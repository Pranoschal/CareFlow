import { Component, OnInit, SimpleChanges, inject } from '@angular/core';
import { RequestServerService } from 'src/app/services/request-server.service';
import { DataUseService } from 'src/app/services/data-use.service';
import { LoginRegisterService } from 'src/app/services/login-register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-discharge',
  templateUrl: './discharge.component.html',
  styleUrls: ['./discharge.component.css'],
})
export class DischargeComponent implements OnInit {
  adminServ = inject(RequestServerService);
  du = inject(DataUseService);
  lr = inject(LoginRegisterService);

  dischargeData: any = null;
  data: any = null;
  isLoading: boolean = true;
  state: number = -1;
  roomData: any = {
    roomId: 0,
    roomName: '',
    roomNo: 0,
  };

  ngOnInit(): void {
    this.adminServ.getDischargeRequest().subscribe((res) => {
      this.dischargeData = res;
      this.state = this.dischargeData.length;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    });
  }

  approve(rid: number, pid: number, pname: string, id: number) {
    this.adminServ.getRooms(rid).subscribe((res) => {
      for (let i = 0; i < res.room.length; i++) {
        if (res.room[i].pid == pid) {
          res.room[i].pid = 0;
          res.room[i].pname = '';
          this.roomData.roomId = null;
          this.roomData.roomName = '';
          this.roomData.roomNo = null;
          this.lr.update_patient_details(pid, this.roomData).subscribe();
          break;
        }
      }
      res.availableRooms += 1;
      res.bookedRooms -= 1;
      this.adminServ.updateRooms(res, res.id).subscribe(() => {
        // alert('Patient : '+pname+' discharged successfully!');
      });
      Swal.fire({
        position: 'center',

        icon: 'success',

        title: `Patient ${pname} discharged succesfully`,

        showConfirmButton: false,

        timer: 1500,
      });
      this.adminServ.deleteDischargeRequest(id).subscribe();
    });

    this.dischargeData = this.dischargeData.filter((val: any) => {
      return val.patientId != pid;
    });

    if (this.state != this.dischargeData.length) {
      this.isLoading = true;
      setTimeout(() => {
        this.adminServ.getDischargeRequest().subscribe((res) => {
          this.dischargeData = res;
          this.state = this.dischargeData.length;
          setTimeout(() => {
            this.isLoading = false;
          }, 250);
        });
      }, 250);
    }
  }

  deny(id: number, pid: number) {
    this.adminServ.deleteDischargeRequest(id).subscribe(() => {
      // alert('Request Rejected :(');
    });
    Swal.fire({
      position: 'center',

      icon: 'warning',

      title: 'Discharge request rejected',

      showConfirmButton: false,

      timer: 1500,
    });
    this.dischargeData = this.dischargeData.filter((val: any) => {
      return val.patientId != pid;
    });

    if (this.state != this.dischargeData.length) {
      this.isLoading = true;
      setTimeout(() => {
        this.adminServ.getDischargeRequest().subscribe((res) => {
          this.dischargeData = res;
          this.state = this.dischargeData.length;
          setTimeout(() => {
            this.isLoading = false;
          }, 250);
        });
      }, 250);
    }
  }
}
