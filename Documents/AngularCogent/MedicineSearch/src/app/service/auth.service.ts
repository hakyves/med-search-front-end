
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MedicalShop } from './medicalshop.service';
import { MedShop } from '../med-shop';

export class User{
  constructor(
    public status:string,
     ) {}
  
}

export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}
  
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  shop;
  constructor(
    private httpClient:HttpClient
  ) { 
     }

     authenticate(username, password) {
       
      return this.httpClient.post<any>('http://localhost:8088/token/generate-token',{username,password}).pipe(
       map(
         userData => {
          sessionStorage.setItem('username',username);
          let tokenStr= 'Bearer '+userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
          
         }
       )
  
      );
    }
    getToken(){
      
    }
  

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }
  isUserAdmin(){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.httpClient.get<Boolean>('http://localhost:8088/isadmin',{headers});
     
  }
  getShopIdByUser(username){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
     this.shop = this.httpClient.get<MedShop>('http://localhost:8088/req/getUserShopId/'+username,{headers});
    
     return this.shop;

  }
  
  logOut() {
    sessionStorage.clear();
  }


}