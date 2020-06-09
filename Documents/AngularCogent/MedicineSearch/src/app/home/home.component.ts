import { Component, OnInit } from '@angular/core';
import { MedicalShop, MedicalshopService } from '../service/medicalshop.service';

import { UserService } from '../user.service';
import { first } from 'rxjs/operators';
import { MedSearchRespo, MsearchService } from '../msearch.service';
import { Medicine } from '../service/medicine.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //medicalshops:MedicalShop[];
 // medisearchs:MedSearchRespo[];
 // medicines:Medicine[];
  medsearchs:MedSearchRespo[];
  public name:string;
  constructor(private medicalshop:MedicalshopService,public medisearchservice:MsearchService) { }

  getMedsearchFunction()
  {
    
    this.medisearchservice.getMedsearch(this.name).subscribe(response =>this.getMeds(response))
    this.medisearchservice.getMedsearch1(this.name).subscribe(response =>this.getMeds(response))
  
  }

  ngOnInit() {
  }



getMeds(response){
  this.medsearchs=response;

}
 
}
