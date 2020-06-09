import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { TokenStorageService } from '../token-storage.service';
import { MedicalShop } from '../service/medicalshop.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


username = ''
  password = ''
  invalidLogin = false
  shop: MedicalShop= new MedicalShop(null,null,null,null,null,null,null);
  constructor(private router: Router,
    private loginservice: AuthService) { }

  ngOnInit() {
  }

  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.loginservice.isUserAdmin().subscribe(x=>this.handleResponse(),
        (error)=> {
          this.handleuser();
        }
        )
        this.router.navigate([''])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
       
      }
    )
    );


  }
  handleResponse(){
    sessionStorage.setItem('Role',"ADMIN");
    console.log(+this.username);
    this.loginservice.getShopIdByUser(this.username).subscribe(response=> {
      this.shop = response;
      console.log( this.shop);
    });
    //console.log("ADMIN")
  }
  getShopId(response){
  //  sessionStorage.setItem('shopId', response)
    console.log(response);
  }

  handleuser()
  {
    sessionStorage.setItem('Role',"USER");
    console.log("the username is "+this.username);
    this.loginservice.getShopIdByUser(this.username).subscribe(response=> {
      this.shop = response;
      console.log( this.shop);
      sessionStorage.setItem('shopId',this.shop.id.toString());
    });

  }

}
