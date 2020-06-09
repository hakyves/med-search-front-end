import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UserService, User } from '../user.service';
import { BloodBank, BloodbankService } from '../service/bloodbank.service';
;
import { MedicalShop,MedicalshopService } from '../service/medicalshop.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user:User = new User(0,'','','');

  bloodbanks:BloodBank;
  medicalshop:MedicalShop;
  constructor(private userservice:UserService,private router:Router,private medicalshopservice:MedicalshopService) {}
  

  ngOnInit(): void {
    
    this.medicalshopservice.getMedicalShop(sessionStorage.getItem('id')).subscribe(response=>this.handleSuccessResponse(response))
  }
  handleSuccessResponse(response){
    console.log(response);
    this.bloodbanks=response;
  }
    createUser(): void{
     
      this.userservice.createUser(this.bloodbanks.id, this.user).subscribe(data=>{
        console.log('user created successful');
        this.router.navigate(['/user']);
        
      })


  }
}
