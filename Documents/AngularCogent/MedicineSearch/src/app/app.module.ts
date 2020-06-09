import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicinesComponent } from './medicines/medicine.component';
import { MedicineService } from './service/medicine.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MedicalshopComponent } from './medicalshop/medicalshop.component';
import { BloodComponent } from './blood/blood.component';
import { BloodbankComponent } from './bloodbank/bloodbank.component';
import { CreateMedicalshopComponent } from './create-medicalshop/create-medicalshop.component';
import { CreateBloodbankComponent } from './create-bloodbank/create-bloodbank.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './service/auth.service';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { AddBloodComponent } from './add-blood/add-blood.component';
import { BshopComponent } from './bshop/bshop.component';
import { EditBloodbankComponent } from './edit-bloodbank/edit-bloodbank.component';
import { AddUser2Component } from './add-user2/add-user2.component';
import { CommonModule } from '@angular/common';
import { OneshopComponent } from './oneshop/oneshop.component';

// import { authInterceptorProviders } from './helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MedicinesComponent,
    MedicalshopComponent,
    BloodComponent,
    BloodbankComponent,
    CreateMedicalshopComponent,
    CreateBloodbankComponent,
    LoginComponent,
    LogoutComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    UserComponent,
    AddUserComponent,
    AddMedicineComponent,
    AddBloodComponent,
    BshopComponent,
    EditBloodbankComponent,
    AddUser2Component,
    OneshopComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule,BrowserModule,CommonModule
  ],
  providers: [MedicineService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
