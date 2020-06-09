import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';
import { BloodBank, BloodbankService } from '../service/bloodbank.service';
import { MedicalShop } from '../service/medicalshop.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user2',
  templateUrl: './add-user2.component.html',
  styleUrls: ['./add-user2.component.css']
})
export class AddUser2Component implements OnInit {

  user:User = new User(0,'','','');

  bloodbanks:BloodBank;
  //medicalshop:MedicalShop;
  constructor(private userservice:UserService,private router:Router,private bloodbankservice:BloodbankService) {}
  



  ngOnInit(): void {
    this.bloodbankservice.getBloodBank(sessionStorage.getItem('id')).subscribe(response=>this.handleSuccessResponse(response))
   
  }
  handleSuccessResponse(response){
    console.log(response);
    this.bloodbanks=response;
  }
      createUserB(): void{
        console.log(this.bloodbanks)
        this.userservice.createUserB(this.bloodbanks.id, this.user).subscribe(data=>{
          console.log('user created successful');
          this.router.navigate(['/user']);
        })
    }

  // getBloodBank(bloodbank:BloodBank):void{
  //   this.bloodbankservice.getBloodBank(bloodbank).subscribe(data=>{this.bloodbanks=this.bloodbanks.
  //     filter(x=>x===bloodbank);})
  //   }
  }

