import { Component } from '@angular/core';
import { RequestServerService } from 'src/app/services/request-server.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.css'],
})
export class AddRoomsComponent {
  constructor(private srv: RequestServerService) {}
  id: number = 0;
  price: number = 0;
  val: string = '';
  i: number = 0;


  Add() {
    console.log()
    this.srv.getRooms(this.id).subscribe((res) => {
      res.totalRooms += Number(this.val);
      res.availableRooms += Number(this.val);

      for (let i = res.room.length + 1; i <= res.totalRooms; i++) {
        const newRoom = {
          pid: 0,
          pname : "",
          roomNo: i,
          'entry-timestamp': '',
          'exit-timestamp': '',
        };
        res.room.push(newRoom);
      }
      this.srv.updateRooms(res, this.id).subscribe((dt) => {
        console.log(this.id,res);
        // alert('Rooms added successfully to '+res.roomName+' category.')
        Swal.fire({
          position:'center',
          icon:'success',
          title:`Rooms added successfully to ${res.roomName}`,
          showConfirmButton:false,
          timer:1500
        })
      });
    });
  }

  editPrice() {
    this.srv.getRooms(this.id).subscribe((res) => {
      res.price = this.price;
      console.log(res.room);
      for(let i=res.room.length+1;i<=res.totalRooms;i++)
      {
        const newRoom={
          pid:0,
          pname : "",
          roomNo:i,
          "entry-timestamp":"",
          "exit-timestamp":""
        }
        res.room.push(newRoom);
      }
          this.srv.updateRooms(res,this.id).subscribe((dt)=>{
            console.log(dt);
          })
        })
          }
      Remove()
      {
        this.srv.getRooms(this.id).subscribe((res)=>{
        res.totalRooms-=Number(this.val);
        res.availableRooms-=Number(this.val);
        this.srv.updateRooms(res,this.id).subscribe((dt)=>{
          console.log(dt);
        })
      })
    }
  onShow() {
    this.srv.getRooms(this.id).subscribe((res) => {
      if (res.id == 0) {
        this.price = 0;
      }
      if (res.id == 1) {
        this.price = res.price;
      } else if (res.id == 2) {
        this.price = res.price;
      } else if (res.id == 3) {
        this.price = res.price;
      } else if (res.id == 4) {
        this.price = res.price;
      } else if (res.id == 5) {
        this.price = res.price;
      }
    });
  }
}
