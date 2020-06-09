import { Component, OnInit } from '@angular/core';
import {  BloodbankService } from '../service/bloodbank.service';
import { BloodBank } from '../_models/BloodBank';

@Component({
  selector: 'app-bshop',
  templateUrl: './bshop.component.html',
  styleUrls: ['./bshop.component.css']
})
export class BshopComponent implements OnInit {
 // bloodbanks:BloodBank[];
//  constructor(private bloodbankservice:BloodbankService) { }

  ngOnInit(): void {
   // this.bloodbankservice.getBloodBank().subscribe(response=>this.handleSuccessResponse(response))
  //}
 // handleSuccessResponse(response){
  //  this.bloodbanks=response;
  }
}
