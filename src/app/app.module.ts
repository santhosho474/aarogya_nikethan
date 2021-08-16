import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FindhospitalComponent } from './components/findhospital/findhospital.component';
import { ReservehospitalComponent } from './components/reservehospital/reservehospital.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatehospitalComponent } from './components/createhospital/createhospital.component';
import { AdminloginComponent } from './components/Login/adminlogin/adminlogin.component';
import { UserloginComponent } from './components/Login/userlogin/userlogin.component';
import { HospitalloginComponent } from './components/Login/hospitallogin/hospitallogin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FindhospitalComponent,
    ReservehospitalComponent,
    CreatehospitalComponent,
    AdminloginComponent,
    UserloginComponent,
    HospitalloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
