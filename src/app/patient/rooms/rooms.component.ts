import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{
  router = inject(Router);
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.router.navigateByUrl('rooms/economy')
  }

}
