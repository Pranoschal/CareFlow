import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { BodyComponent } from './body/body.component';
import { RegisterComponent } from './register/register.component';
import { PatientHomeComponent } from './patient/patient-home/patient-home.component';
import { AdminComponent } from './admin/admin.component';

import { HeaderComponent } from './header/header.component';
import { DeluxeComponent } from './patient/rooms/deluxe/deluxe.component';
import { EconomyComponent } from './patient/rooms/economy/economy.component';
import { EconomyPlusComponent } from './patient/rooms/economy-plus/economy-plus.component';
import { TwinSharingComponent } from './patient/rooms/twin-sharing/twin-sharing.component';
import { PremiumComponent } from './patient/rooms/premium/premium.component';
import { RoomsComponent } from './patient/rooms/rooms.component';
import { ProfileComponent } from './patient/profile/profile.component';
import { AlocateComponent } from './admin/admin-view-request/alocate/alocate.component';
import { TransferRoomComponent } from './patient/transfer-room/transfer-room.component';
import { TransferComponent } from './admin/admin-view-request/transfer/transfer.component';

import { PatientComponent } from './patient/patient.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DischargeRoomPatientComponent } from './patient/discharge-room-patient/discharge-room-patient.component';
import { AddRoomsComponent } from './admin/add-rooms/add-rooms.component';
import { AvailableRoomsComponent } from './admin/available-rooms/available-rooms.component';
import { PatientAboutComponent } from './patient/patient-about/patient-about.component';
import { AboutComponent } from './about/about.component';
import { PatientContactsComponent } from './patient/patient-contacts/patient-contacts.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminContactsComponent } from './admin/admin-contacts/admin-contacts.component';
import { AdminAboutComponent } from './admin/admin-about/admin-about.component';
import { EconomyPlusAdminComponent } from './admin/available-rooms/economy-plus-admin/economy-plus-admin.component';
import { DeluxeAdminComponent } from './admin/available-rooms/deluxe-admin/deluxe-admin.component';
import { EconomyAdminComponent } from './admin/available-rooms/economy-admin/economy-admin.component';
import { TwinSharingAdminComponent } from './admin/available-rooms/twin-sharing-admin/twin-sharing-admin.component';
import { PremiumAdminComponent } from './admin/available-rooms/premium-admin/premium-admin.component';
import { SearchPatientComponent } from './admin/search-patient/search-patient.component';
import { DisplayRoomsComponent } from './admin/available-rooms/display-rooms/display-rooms.component';
import { PatientNotificationComponent } from './patient/patient-notification/patient-notification.component';
// import { RequestRoomComponent } from './patient/request-room/request-room.component';
import { DischargeComponent } from './admin/admin-view-request/discharge/discharge.component';
import { transferGuard } from './guarding/transfer.guard';
import { dischargeGuard } from './guarding/discharge.guard';
import { allocateGuard } from './guarding/allocate.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  }
  , {
    path: 'patient',
    children: [
      {
        path: 'patient-home', component: PatientHomeComponent
      },
      {
        path: 'patient-about', component: PatientAboutComponent
      },
      {
        path: 'patient-contact', component: PatientContactsComponent
      },
      {
        path: 'patient-profile',
        component: ProfileComponent,
      },
      {
        path: 'patient-transfer', component: TransferRoomComponent,canActivate:[transferGuard]
      },
      {
        path: 'patient-disharge', component: DischargeRoomPatientComponent,canActivate:[dischargeGuard]
      },
      {
        path: 'patient-transfer', component: TransferRoomComponent
      },
      {
        path:'patient-notification', component:PatientNotificationComponent
      },
      {
        path: 'rooms',
        component: RoomsComponent,canActivate:[allocateGuard],
        children: [
          {
            path: 'economy-plus',
            component: EconomyPlusComponent,
          },
          {
            path: 'deluxe',
            component: DeluxeComponent,
          },
          {
            path: 'economy',
            component: EconomyComponent,
          },
          {
            path: 'twin-sharing',
            component: TwinSharingComponent,
          },
          {
            path: 'premium',
            component: PremiumComponent,
          },
        ],
      },

    ]
  },

  {
    path: 'admin',
    children: [
      {
        path: 'admin-home', component: AdminHomeComponent
      },
      {
        path: 'admin-about', component: AdminAboutComponent
      },
      {
        path: 'admin-search', component: SearchPatientComponent
      },
      {
        path: 'admin-contacts', component: AdminContactsComponent
      },
      {
        path: 'admin-addRooms', component: AddRoomsComponent
      },
      {
        path: 'admin-rooms',
        component: AvailableRoomsComponent,
        children: [
          {
            path: 'economy-plus',
            component: EconomyPlusAdminComponent,
          },
          {
            path: 'deluxe',
            component: DeluxeAdminComponent,
          },
          {
            path: 'economy',
            component: EconomyAdminComponent,
          },
          {
            path: 'twin-sharing',
            component: TwinSharingAdminComponent,
          },
          {
            path: 'premium',
            component: PremiumAdminComponent,
          },
        ]
      },
      {
        path: 'display-rooms', component: DisplayRoomsComponent
      },
      {
        path: 'admin-view-allocate', component: AlocateComponent
      },

      {
        path: 'admin-view-transfer', component: TransferComponent
      },
      {
        path:'admin-view-discharge',component:DischargeComponent
      },
      {
        path: 'adminAddRooms', component: AddRoomsComponent
      },

    ]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
