import { Component, OnInit } from '@angular/core';
import { Medicine, MedicineService } from '../service/medicine.service';
import { Router } from '@angular/router';
import { MedicalShop, MedicalshopService } from '../service/medicalshop.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

    medicalshop:MedicalShop;
    medicine:Medicine = new Medicine(null,null,null,null,null);
   
     constructor(private router:Router,private medicalshopservice:MedicalshopService,private medservice:MedicineService) { }
   

  ngOnInit(): void {}
  addMedicine(){
      console.log(sessionStorage.getItem('shopId'));
      console.log(this.medicine);
    this.medservice.createMedicine(sessionStorage.getItem('shopId'), this.medicine).subscribe(data=>{console.log('Med added successfully')})
    this.router.navigate(['/medicine']);
  }
  }
