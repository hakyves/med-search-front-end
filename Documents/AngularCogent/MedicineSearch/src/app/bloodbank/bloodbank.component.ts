import { Component, OnInit } from '@angular/core';
import { BloodbankService } from '../service/bloodbank.service';
import { Router } from '@angular/router';
import { BloodBank } from '../_models/BloodBank';

@Component({
  selector: 'app-bloodbank',
  templateUrl: './bloodbank.component.html',
  styleUrls: ['./bloodbank.component.css']
})
export class BloodbankComponent implements OnInit {
  bloodbanks:BloodBank[];

  constructor(private bloodbank:BloodbankService,private router: Router) { }

  ngOnInit(): void {
    this.bloodbank.getBloodBanks().subscribe(response=>this.handleSuccessResponse(response))
  }
  handleSuccessResponse(response){
    this.bloodbanks=response;
  }
  deleteBloodBank(bloodbank:BloodBank):void{
    this.bloodbank.deleteBloodBank(bloodbank).subscribe(data=>{this.bloodbanks=this.bloodbanks.
    filter(x=>x!==bloodbank);})
  }
  updateBloodBank(bloodbank:BloodBank):void{
    this.bloodbank.updateBloodBank(bloodbank).subscribe(data=>{this.bloodbanks=this.bloodbanks.
    filter(x=>x!==bloodbank);})
  }
  getBloodBank(bloodbank:BloodBank):void{
    this.bloodbank.getBloodBank(bloodbank).subscribe(data=>{this.bloodbanks=this.bloodbanks.
      filter(x=>x===bloodbank);})
  
  }

  editbloodbank(bloodbank: BloodBank): void {
  window.localStorage.removeItem("editbloodbankId");
  window.localStorage.setItem("editbloodbankId", bloodbank.id.toString());
  //sessionStorage.setItem('bloodbankId',bloodbank.id)
  this.router.navigate(['edit-bloodbank']);
}
};
