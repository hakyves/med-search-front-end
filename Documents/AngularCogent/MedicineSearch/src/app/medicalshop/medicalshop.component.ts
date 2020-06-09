import { Component, OnInit } from '@angular/core';
import { MedicalShop, MedicalshopService } from '../service/medicalshop.service';
import {FormsModule } from '@angular/forms';

@Component({
  selector: 'app-medicalshop',
  templateUrl: './medicalshop.component.html',
  styleUrls: ['./medicalshop.component.css']
})
export class MedicalshopComponent implements OnInit {
  medicalshops:MedicalShop[];
  public update:boolean = false;
  public buttonName:any = 'Update';

  constructor(private medicalshop:MedicalshopService) { }

  ngOnInit(): void {
    this.medicalshop.getMedicalShops().subscribe(response=>this.handleSuccessResponse(response))
  }
  handleSuccessResponse(response){
    this.medicalshops=response;
  }
  deleteMedicalShop(medicalshop:MedicalShop):void{
    this.medicalshop.deleteMedicalShop(medicalshop).subscribe(data=>{this.medicalshops=this.medicalshops.
    filter(x=>x!==medicalshop);})
  }
  updateMedicalShop(medicalshop:MedicalShop):void{
    this.medicalshop.updateMedicalShop(medicalshop).subscribe(data=>{this.medicalshops=this.medicalshops.
    filter(x=>x!==medicalshop);})
  }
  getMedicalShop(medicalshop:MedicalShop):void{
    this.medicalshop.getMedicalShop(medicalshop).subscribe(data=>{this.medicalshops=this.medicalshops.
      filter(x=>x===medicalshop);})
  
  }


  toggle() {
    this.update = !this.update;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.update)  
      this.buttonName = "Save";
    else
      this.buttonName = "Update";
  }
}
               


