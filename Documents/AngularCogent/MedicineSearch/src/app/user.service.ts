import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { MedicalShop } from './service/medicalshop.service';
import { BloodbankService } from './service/bloodbank.service';


  export class User{
    constructor(public id:number,public username:string,public email:string,public password:string){}
  }
 
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private bloodbank:BloodbankService) { }

  public getUsers():Observable<any>{
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.http.get<User>('http://localhost:8088/users',{headers});
  }
  public createUser(id:number,user:User){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
  //  const bid = bloodbank.getBloodBank('id');
   // console.log(bid);
    return this.http.post<User>('http://localhost:8088/register/'+id,user,{headers});
  }
  public createUserB(id:number,user:User){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
 
    return this.http.post<User>('http://localhost:8088/registerb/'+id,user,{headers});
  }
  public deleteUser(user){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.http.delete<User>('http://localhost:8088/user/delete/'+user.id,{headers});
  }
  public updateUser(user){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.http.put<User>('http://localhost:8088/updateUser/',user,{headers});
  }
  public getUser(user){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.http.get<User>('http://localhost:8088/users/'+user.id,{headers})
  }
}
