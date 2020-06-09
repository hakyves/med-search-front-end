import { Component, OnInit } from '@angular/core';
import { MedicalShop, MedicalshopService } from '../service/medicalshop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicalshop',
  templateUrl: './create-medicalshop.component.html',
  styleUrls: ['./create-medicalshop.component.css']
})
export class CreateMedicalshopComponent implements OnInit {
  medicalshop:MedicalShop = new MedicalShop(0,'','','','','',false);
  constructor(private medicalshopservice:MedicalshopService,private router:Router) {}
  

  ngOnInit(): void {}
    createMedicalShop(): void{
      this.medicalshopservice.createMedicalShop(this.medicalshop).subscribe(data=>{
        console.log('Medicalshop created successful');
        this.router.navigate(['/medicalshop']);
      })
    }
  }


