import { Component, OnInit } from '@angular/core';
import { Blood,BloodService } from '../service/blood.service';

@Component({
  selector: 'app-blood',
  templateUrl: './blood.component.html',
  styleUrls: ['./blood.component.css']
})
export class BloodComponent implements OnInit {
  bloods:Blood[];
  
  constructor(private blood:BloodService) { }

  ngOnInit(): void {
    this.blood.getBloods().subscribe(response=>this.handleSuccessResponse(response))
  }
  handleSuccessResponse(response){
    this.bloods=response;
  }
  deleteBlood(blood:Blood):void{
    this.blood.deleteBlood(blood).subscribe(data=>{this.bloods=this.bloods.
    filter(x=>x!==blood);})
  }
  updateBlood(blood:Blood): void{
    this.blood.updateBlood(blood).subscribe(data=>{this.bloods=this.bloods.
    filter(x=>x!==blood);})
  }
  getBlood(blood:Blood):void{
    this.blood.getBlood(blood).subscribe(data=>{this.bloods=this.bloods.
      filter(x=>x===blood);})
  }

}
