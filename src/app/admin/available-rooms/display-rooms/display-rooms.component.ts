import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { RequestServerService } from 'src/app/services/request-server.service';


@Component({
  selector: 'app-display-rooms',
  templateUrl: './display-rooms.component.html',
  styleUrls: ['./display-rooms.component.css'],
})
export class DisplayRoomsComponent implements OnInit {

  @Output()
  sendEmitter : EventEmitter<any> = new EventEmitter<any>();


  dataS = inject(RequestServerService);
  patientName: string | null = null;
  patientRoomNo: number | null = null;
  rooms: any = [];
  roomcategory: any;

  roomData : any = {
    rid : null,
    vacantRoomNo : null
  }
  ngOnInit(): void {
    this.dataS.getAllRooms().subscribe((res) => {
      this.rooms = res;

    });
  }


  onHover(pname: string, roomNo: number) {
    this.patientName = pname;
    this.patientRoomNo = roomNo;
  }

  offHover() {
    this.patientName = null;
    this.patientRoomNo = null;
  }

  sendRoomNo(roomID:number,roomNumber:any)
  {
    this.roomData.rid = Number(roomID) + 1;
    this.roomData.vacantRoomNo = roomNumber;
    this.sendEmitter.emit(this.roomData);
  }
}
