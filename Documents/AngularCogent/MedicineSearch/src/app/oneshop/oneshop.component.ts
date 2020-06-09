import { Component, OnInit } from '@angular/core';
import { MedicalShop, MedicalshopService } from '../service/medicalshop.service';
import { Router } from '@angular/router';
import { Medicine, MedicineService } from '../service/medicine.service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-oneshop',
  templateUrl: './oneshop.component.html',
  styleUrls: ['./oneshop.component.css']
})
export class OneshopComponent implements OnInit {
 medicalshop:MedicalShop;
 medicine:Medicine[];
 select = new MedicalShop(null,null,null,null,null,null,null)
 

  constructor(private router:Router,private medicalshopservice:MedicalshopService,private medservice:MedicineService) { }

  ngOnInit(): void {
    this.medicalshopservice.getMedicalShop(this.medicalshop).subscribe(response=>this.handleSuccessResponse(response))
  }
  handleSuccessResponse(response){
    this.medicalshop=response;
  }
  addMedicine(){
    this.medservice.createMedicine(sessionStorage.getItem('shopId'), this.medicine).subscribe(data=>{console.log('Med added successfully')})

  }
 
}
