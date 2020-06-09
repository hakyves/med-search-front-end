import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {  BloodbankService,BloodBank } from '../service/bloodbank.service';
//import { BloodBank } from '../_models/BloodBank';

@Component({
  selector: 'app-edit-bloodbank',
  templateUrl: './edit-bloodbank.component.html',
  styleUrls: ['./edit-bloodbank.component.css']
})
export class EditBloodbankComponent implements OnInit {

  bloodbank: BloodBank;
 // editForm: FormGroup;
  constructor(private route: ActivatedRoute,private formBuilder: FormBuilder,private router: Router, private bloodbankservice: BloodbankService) { }


id: number;


ngOnInit() {
   this.bloodbank = new BloodBank(null,null,null,null,null,null,null);
  // this.bloodbank = new BloodBank();

  this.id = this.route.snapshot.params['id'];
  console.log('This is the id from thee route ' + this.id);
//  let id = sessionStorage.getItem('id');
  this.bloodbankservice.getBloodBank(this.id)
    .subscribe(data => {
      console.log(data)
   //   this.bloodbank = data;
    }, error => console.log(error));
}

updateBloodBank() {
  this.bloodbankservice.updateBloodBank(this.id)
    .subscribe(data => console.log(data), error => console.log(error));
  this.bloodbank = new BloodBank(null,null,null,null,null,null,null);
  this.gotoList();
}

onSubmit() {
  this.updateBloodBank();    
}

gotoList() {
  this.router.navigate(['/bloodbank']);
}
}

