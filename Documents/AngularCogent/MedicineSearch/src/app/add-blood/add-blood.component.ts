import { Component, OnInit } from '@angular/core';
import { Blood, BloodService } from '../service/blood.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blood',
  templateUrl: './add-blood.component.html',
  styleUrls: ['./add-blood.component.css']
})
export class AddBloodComponent implements OnInit {

  blood:Blood= new Blood(0,'',0);
  constructor(private bloodservice:BloodService,private router:Router) {}
  

  ngOnInit(): void {}
          addBlood(): void{
      this.bloodservice.createBlood(this.blood).subscribe(data=>{
        console.log('Blood added successful');
        this.router.navigate(['/']);
      })
    }

}
