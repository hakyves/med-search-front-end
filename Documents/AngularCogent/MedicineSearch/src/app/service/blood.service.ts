import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { BloodbankService } from './bloodbank.service';

export class Blood{
  constructor(public id:number,public bloodType:string,public amount:number){}
}

@Injectable({
  providedIn: 'root'
})
export class BloodService {

  constructor(private http:HttpClient) { }
  public getBloods(): Observable<any>{
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.http.get('http://localhost:8088/bloods',{headers});
  }
  public createBlood(bloodbank){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.http.post<Blood>('http://localhost:8088/Addblood/',bloodbank.id,{headers});
  }
  public deleteBlood(blood){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.http.delete<Blood>('http://localhost:8088//blooddelete/'+blood.id,{headers});
  }
  public updateBlood(blood){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.http.put<Blood>('http://localhost:8088/bloodupdate/',blood.id,{headers});
  }
  public getBlood(blood){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.http.get<Blood>('http://localhost:8088/blood/'+blood.id,{headers});
  }
}

