import { Component, OnInit } from '@angular/core';
import { MedicineService, Medicine } from '../service/medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicinesComponent implements OnInit {
  medicines:Medicine[];

  constructor(private medicine:MedicineService) { }

  ngOnInit(): void {
    this.medicine.getMedicines().subscribe(response=>this.handleSuccessResponse(response))
  }
  handleSuccessResponse(response){
    this.medicines=response;
  }
  deleteMedicine(medicine:Medicine):void{
    this.medicine.deleteMedicine(medicine).subscribe(data=>{this.medicines=this.medicines.
    filter(x=>x!==medicine);})
  }
  updateMedicine(medicine:Medicine): void{
    this.medicine.updateMedicine(medicine).subscribe(data=>{this.medicines=this.medicines.
    filter(x=>x!==medicine);})
  }
  getMedicine(medicine:Medicine):void{
    this.medicine.getMedicine(medicine).subscribe(data=>{this.medicines=this.medicines.
      filter(x=>x===medicine);})
  }
}
