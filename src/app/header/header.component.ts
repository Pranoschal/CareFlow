import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegisterService } from '../services/login-register.service';
import { DataUseService } from '../services/data-use.service';
import { RequestServerService } from '../services/request-server.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  router = inject(Router);
  lr = inject(LoginRegisterService);
  du = inject(DataUseService);
  adminSer = inject(RequestServerService);
  patientLogged = this.lr.isPatientLoggedIn;
  arr : any = [];
  register(){
    this.router.navigateByUrl('register')
  }
  login(){
    this.router.navigateByUrl('login');
  }
  logout(){
    this.lr.isPatientLoggedIn = false;
    this.lr.isAdminLoggedIn = false;
  }

}

