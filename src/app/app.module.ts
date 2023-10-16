import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { PatientComponent } from './patient/patient.component';
import { ServiceCardComponent } from './body/service-card/service-card.component';
import { CrousalComponent } from './body/crousal/crousal.component';
import { LoginComponent } from './Login/login/login.component'
import { BannerComponent } from './body/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientHomeComponent } from './patient/patient-home/patient-home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddRoomsComponent } from './admin/add-rooms/add-rooms.component';
import { AvailableRoomsComponent } from './admin/available-rooms/available-rooms.component';
import { RoomsComponent } from './patient/rooms/rooms.component';

import { EconomyComponent } from './patient/rooms/economy/economy.component';
import { EconomyPlusComponent } from './patient/rooms/economy-plus/economy-plus.component';
import { TwinSharingComponent } from './patient/rooms/twin-sharing/twin-sharing.component';
import { DeluxeComponent } from './patient/rooms/deluxe/deluxe.component';
import { PremiumComponent } from './patient/rooms/premium/premium.component';
import { ProfileComponent } from './patient/profile/profile.component';
import { DeluxeAdminComponent } from './admin/available-rooms/deluxe-admin/deluxe-admin.component';
import { EconomyAdminComponent } from './admin/available-rooms/economy-admin/economy-admin.component';
import { EconomyPlusAdminComponent } from './admin/available-rooms/economy-plus-admin/economy-plus-admin.component';

import { TwinSharingAdminComponent } from './admin/available-rooms/twin-sharing-admin/twin-sharing-admin.component';
import { PremiumAdminComponent } from './admin/available-rooms/premium-admin/premium-admin.component';
import { AlocateComponent } from './admin/admin-view-request/alocate/alocate.component';
import { TransferRoomComponent } from './patient/transfer-room/transfer-room.component';
import { TransferComponent } from './admin/admin-view-request/transfer/transfer.component';
import { DisplayRoomsComponent } from './admin/available-rooms/display-rooms/display-rooms.component';
import { DischargeRoomPatientComponent } from './patient/discharge-room-patient/discharge-room-patient.component';
import { PatientAboutComponent } from './patient/patient-about/patient-about.component';
import { AdminAboutComponent } from './admin/admin-about/admin-about.component';
import { SearchPatientComponent } from './admin/search-patient/search-patient.component';
import { AdminContactsComponent } from './admin/admin-contacts/admin-contacts.component';
import { PatientContactsComponent } from './patient/patient-contacts/patient-contacts.component';
import { PatientNotificationComponent } from './patient/patient-notification/patient-notification.component';
import { DischargeComponent } from './admin/admin-view-request/discharge/discharge.component';
// import { DischargeComponent } from './admin/admin-view-request/discharge/discharge.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    BannerComponent,
    RegisterComponent,
    AdminComponent,
    PatientComponent,
    LoginComponent,
    ServiceCardComponent,
    CrousalComponent,
    PatientHomeComponent,
    ContactsComponent,
    AdminHomeComponent,
    AddRoomsComponent,
    PatientComponent,
    AvailableRoomsComponent,
    RoomsComponent,
    EconomyComponent,
    EconomyPlusComponent,
    TwinSharingComponent,
    DeluxeComponent,
    PremiumComponent,
    AddRoomsComponent,
    ProfileComponent,
    PremiumComponent,
    DeluxeAdminComponent,
    EconomyAdminComponent,
    EconomyPlusAdminComponent,
    DischargeComponent,

    TwinSharingAdminComponent,
    PremiumAdminComponent,
    AlocateComponent,
    TransferRoomComponent,
    TransferComponent,
    DisplayRoomsComponent,
    TransferComponent,
    DischargeRoomPatientComponent,
    PatientAboutComponent,
    AdminAboutComponent,
    SearchPatientComponent,
    PatientContactsComponent,
    PatientNotificationComponent,
    DischargeComponent,

  ],
  schemas:[NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
