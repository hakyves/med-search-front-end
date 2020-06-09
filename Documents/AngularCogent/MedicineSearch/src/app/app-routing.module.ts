import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBloodbankComponent } from './create-bloodbank/create-bloodbank.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers/auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { MedicalshopComponent } from './medicalshop/medicalshop.component';
import { HomeComponent } from './home/home.component';
import { CreateMedicalshopComponent } from './create-medicalshop/create-medicalshop.component';
import { BloodComponent } from './blood/blood.component';
import { BloodbankComponent } from './bloodbank/bloodbank.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { AddBloodComponent } from './add-blood/add-blood.component';
import { BshopComponent } from './bshop/bshop.component';
import { EditBloodbankComponent } from './edit-bloodbank/edit-bloodbank.component';
import { MedicinesComponent } from './medicines/medicine.component';
import { OneshopComponent } from './oneshop/oneshop.component';


const routes: Routes = [
  {path:'createBloodBank',component:CreateBloodbankComponent,canActivate:[AuthGuard]},
  {path: 'createMedicalShop',component:CreateMedicalshopComponent,canActivate: [AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'medicalshop',component:MedicalshopComponent,canActivate: [AuthGuard]},
  {path: 'home',component:HomeComponent},
  {path: 'medicine',component:MedicinesComponent,canActivate:[AuthGuard]},
  {path: 'blood',component:BloodComponent,canActivate:[AuthGuard]},
  {path: 'bloodbank',component:BloodbankComponent,canActivate:[AuthGuard]},
  {path: 'user',component:UserComponent,canActivate:[AuthGuard]},
  {path: 'add-user',component:AddUserComponent,canActivate:[AuthGuard]},
  {path:'add-medicine',component:AddMedicineComponent,canActivate:[AuthGuard]},
  {path:'add-blood',component:AddBloodComponent,canActivate:[AuthGuard]},
  {path:'bshop',component:BshopComponent,canActivate:[AuthGuard]},
  {path:'edit-bloodbank',component:EditBloodbankComponent,canActivate:[AuthGuard]},
  {path:'oneshop',component:OneshopComponent,canActivate:[AuthGuard]},
  {path: 'add-user2',component:AddUserComponent,canActivate:[AuthGuard]},


  // otherwise redirect to home
  {path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
