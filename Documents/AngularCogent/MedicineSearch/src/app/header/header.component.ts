import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   admin:string;
  constructor(public loginService:AuthService) { }

  ngOnInit(): void {
  }
  checkIfAdmin(){
    console.log(sessionStorage.getItem('Role'))
    return sessionStorage.getItem('Role') =='ADMIN';
    
  }

}
