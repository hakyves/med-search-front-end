import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BloodbankService, BloodBank } from '../service/bloodbank.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-bloodbank',
  templateUrl: './create-bloodbank.component.html',
  styleUrls: ['./create-bloodbank.component.css']
})
export class CreateBloodbankComponent implements OnInit {

  bloodbank:BloodBank = new BloodBank(0,'','','','','',false);
  constructor(private bloodbankservice:BloodbankService,private router:Router) {}
  

  ngOnInit(): void {}
    createBloodBank(): void{
   
      this.bloodbankservice.createBloodBank(this.bloodbank).subscribe(data=>{
        console.log('BloodBank created successful');
        this.router.navigate(['/bloodbank']);
      })
    }

}
