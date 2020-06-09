import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BloodBank{
  constructor(public id:number,public bloodBankName:string,public state:string,public city:string,public address:string,public phone:string,public open247:boolean){}

}

@Injectable({
  providedIn: 'root'
})
export class BloodbankService {
 
    
  constructor(private http:HttpClient) { }

 
  public getBloodBanks():Observable<any>{
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.http.get<BloodBank>('http://localhost:8088/bloodBanks',{headers});
  }
  public createBloodBank(bloodbank){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.http.post<BloodBank>('http://localhost:8088/AddbloodBank',bloodbank,{headers});
  }
  public deleteBloodBank(bloodbank){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.http.delete<BloodBank>('http://localhost:8088/bloodBankdelete/'+bloodbank.bbid,{headers});
  }
  public updateBloodBank(id){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.http.put<BloodBank>('http://localhost:8088/bloodBankupdate/'+id,{headers});
  }
  public getBloodBank(id){
    const token = sessionStorage.getItem('token');
    sessionStorage.setItem('id',id);
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    console.log(id);
    return this.http.get<BloodBank>('http://localhost:8088/bloodBank/'+id,{headers})
    
  }
}
