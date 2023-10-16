import { Component, OnInit, SimpleChanges, inject } from '@angular/core';
import { RequestServerService } from 'src/app/services/request-server.service';
import { DataUseService } from 'src/app/services/data-use.service';
import { LoginRegisterService } from 'src/app/services/login-register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
})
export class TransferComponent implements OnInit {
  vacantRoomNo : number | null = null;
  roomCategory : number | null = null;
  adminServ = inject(RequestServerService);
  du = inject(DataUseService);
  lr = inject(LoginRegisterService);
  transferData: any = null;
  data: any = null;
  isLoading: boolean = true;
  state: number = -1;
  roomData: any = {
    roomId: 0,
    roomName: '',
    roomNo: 0,
  };
  ngOnInit(): void {
    this.adminServ.getTransferRequest().subscribe((res) => {
      this.transferData = res;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    });
  }

  receiveRoomNo(roomTransferData : any)
  {
    this.roomCategory = roomTransferData.rid;
    this.vacantRoomNo = roomTransferData.vacantRoomNo;
  }

  approve(
    pid: number,
    id: number,
    fromRoomID : number,
    toRoomID : number,
    fname: string,
    lname: string
  ) {
    // const fromRoomId = this.du.map[fromRoom];
    // const toRoomId = this.du.map[toRoom];
    if (fromRoomID == toRoomID) {
      this.adminServ.getRooms(toRoomID).subscribe((res) => {
        for (let i = 0; i < res.room.length; i++) {
          if (res.room[i].pid == 0 && res.room[i].roomNo == this.vacantRoomNo) 
          {
            res.room[i].pid = pid;
            res.room[i].pname = fname + ' ' + lname;
            this.roomData.roomId = res.id;
            this.roomData.roomName = res.roomName;
            this.roomData.roomNo = res.room[i].roomNo;
            this.lr.update_patient_details(pid, this.roomData).subscribe();
            break;
          }
        }
        for (let i = 0; i < res.room.length; i++) 
        {
          if (res.room[i].pid == pid) {
            res.room[i].pid = 0;
            res.room[i].pname = '';
            break;
          }
        }
        this.adminServ.updateRooms(res, res.id).subscribe((res) => {});
        Swal.fire({
          position: 'center',

          icon: 'success',

          title: 'Patient transfered succesfully',

          showConfirmButton: false,

          timer: 1500,
        });
        this.adminServ.deleteTransferRequest(id).subscribe((res) => {
          this.transferData = res;
        });
      });

      this.transferData = this.transferData.filter((val: any) => {
        return val.pid != pid;
      });

      if (this.state != this.transferData) {
        this.isLoading = true;
        setTimeout(() => {
          this.adminServ.getTransferRequest().subscribe((res) => {
            this.transferData = res;
            setTimeout(() => {
              this.isLoading = false;
            }, 250);
          });
        }, 250);
      }
    } else {
      this.adminServ.getRooms(toRoomID).subscribe((res) => {
        for (let i = 0; i < res.room.length; i++) {
          if (res.room[i].pid == 0 && res.room[i].roomNo==this.vacantRoomNo) 
          {
            res.room[i].pid = pid;
            res.room[i].pname = fname + ' ' + lname;
            res.availableRooms -= 1;
            res.bookedRooms += 1;
            this.roomData.roomId = res.id;
            this.roomData.roomName = res.roomName;
            this.roomData.roomNo = res.room[i].roomNo;
            this.lr.update_patient_details(pid, this.roomData).subscribe();
            break;
          }
        }
       
        this.adminServ.updateRooms(res, toRoomID).subscribe();
      });

      this.adminServ.getRooms(fromRoomID).subscribe((res) => {
        for (let i = 0; i < res.room.length; i++) {
          if (res.room[i].pid == pid) 
          {
            res.room[i].pid = 0;
            res.room[i].pname = '';
            res.availableRooms += 1;
            res.bookedRooms -= 1;
            break;
          }
        }
        
        this.adminServ.updateRooms(res, fromRoomID).subscribe((res) => {});
        Swal.fire({
          position: 'center',

          icon: 'success',

          title: 'Patient transfered succesfully',

          showConfirmButton: false,

          timer: 1500,
        });
        this.adminServ.deleteTransferRequest(id).subscribe((res) => {
          this.transferData = res;
        });
      });

      this.transferData = this.transferData.filter((val: any) => {
        return val.pid != pid;
      });

      if (this.state != this.transferData) {
        this.isLoading = true;
        setTimeout(() => {
          this.adminServ.getTransferRequest().subscribe((res) => {
            this.transferData = res;
            setTimeout(() => {
              this.isLoading = false;
            }, 250);
          });
        }, 250);
      }
    }
  }

  deny(id: number, pid: number) {
    this.adminServ.deleteTransferRequest(id).subscribe((res) => {});
    Swal.fire({
      position: 'center',

      icon: 'warning',

      title: 'Room transfer request rejected',

      showConfirmButton: false,

      timer: 1500,
    });
    this.transferData = this.transferData.filter((val: any) => {
      return val.pid != pid;
    });

    if (this.state != this.transferData) {
      this.isLoading = true;
      setTimeout(() => {
        this.adminServ.getTransferRequest().subscribe((res) => {
          this.transferData = res;
          setTimeout(() => {
            this.isLoading = false;
          }, 250);
        });
      }, 250);
    }
  }
}
