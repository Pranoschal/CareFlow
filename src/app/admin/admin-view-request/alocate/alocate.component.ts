import { Component, OnInit, inject } from '@angular/core';
import { RequestServerService } from 'src/app/services/request-server.service';
import { DataUseService } from 'src/app/services/data-use.service';
import { LoginRegisterService } from 'src/app/services/login-register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alocate',
  templateUrl: './alocate.component.html',
  styleUrls: ['./alocate.component.css'],
})
export class AlocateComponent implements OnInit {
  //storing all the room allocation request
  allocationData: any = null;
  //storing length of allocationData
  state: number = -1;
  isLoading = true;
  roomCategory : number | null = null;
  vacantRoomNo : number | null = null;
  requestServer = inject(RequestServerService);
  lr = inject(LoginRegisterService);
  du = inject(DataUseService);

  //for updating patient's info, storing the room details after he/she has been allocated.
  roomData: any = {
    roomId: 0,
    roomName: '',
    roomNo: 0,
  };

  ngOnInit(): void {
    //fetching all the requests for room allocation and storing it in allocationData
    this.requestServer.getRoomRequest().subscribe((res) => {
      this.allocationData = res;
      this.state = this.allocationData.length;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    });
  }

  receiveRoomNo(roomAllocateData : any)
  {
    this.roomCategory = roomAllocateData.rid;
    this.vacantRoomNo = roomAllocateData.vacantRoomNo;
  }



  //Allocating room
  //id = request id
  approve(rid: number, pid: number, id: number, fname: string, lname: string) {
    //fetching room of a
    this.requestServer.getRooms(rid).subscribe((val) => {
      //check every rooms in that category
      for (let i = 0; i < val.room.length; i++) {
        //alloting the patient to the first occurence of an empty room
        if (val.room[i].pid == 0 && val.room[i].roomNo==this.vacantRoomNo) {
          val.room[i].pid = pid;
          val.room[i].pname = fname + ' ' + lname;
          val.availableRooms -= 1;
          val.bookedRooms += 1;
          this.roomData.roomId = rid;
          this.roomData.roomName = val.roomName;
          this.roomData.roomNo = val.room[i].roomNo;
          //adding/updating in patient's info
          this.lr.update_patient_details(pid, this.roomData).subscribe();
          //
          this.requestServer.updateRooms(val, rid).subscribe((updt) => {

          });


          break;
        }
      }
      Swal.fire({
        position: 'center',

        icon: 'success',

        title: 'Room alloted succesfully',

        showConfirmButton: false,

        timer: 1500,
      });
      //after allocation, delete the room allocation request
      this.requestServer.deleteRoomRequest(id).subscribe();
    });
    //filter out all the requst, except the one which we have just allocated
    this.allocationData = this.allocationData.filter((val: any) => {
      return val.pid != pid;
    });
    //if change i the allocation data array length
    if (this.state != this.allocationData.length) {
      this.isLoading = true;
      setTimeout(() => {
        this.requestServer.getRoomRequest().subscribe((res) => {
          this.allocationData = res;
          this.state = this.allocationData.length;
          setTimeout(() => {
            this.isLoading = false;
          }, 250);
        });
      }, 250);
    }
  }

  deny(id: number, pid: number) {
    this.requestServer.deleteRoomRequest(id).subscribe((res) => {


    });
    Swal.fire({
      position: 'center',

      icon: 'warning',

      title: 'Room allocation request rejected',

      showConfirmButton: false,

      timer: 1500,
    });

    this.allocationData = this.allocationData.filter((val: any) => {
      return val.pid != pid;
    });

    if (this.state != this.allocationData.length) {
      this.isLoading = true;
      setTimeout(() => {
        this.requestServer.getRoomRequest().subscribe((res) => {
          this.allocationData = res;
          this.state = this.allocationData.length;
          setTimeout(() => {
            this.isLoading = false;
          }, 250);
        });
      }, 250);
    }
  }
}
