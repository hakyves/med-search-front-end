import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Medicine } from './medicine.service';
export class MedicalShop{
  constructor(public id:number,
    public shopName:string,
    public state:string,
    public city:string,
    public address:string,
    public phone:string,
    public open247:boolean,
    
    ){}
}

@Injectable({
  providedIn: 'root'
})
export class MedicalshopService {

  constructor(private http:HttpClient) { }
  username='';
    password='';
  public getMedicalShops():Observable<any>{
    
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.http.get<MedicalShop>('http://localhost:8088/medicalshops',{headers});
  }
  public createMedicalShop(medicalshop){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.http.post<MedicalShop>('http://localhost:8088/AddMedicalShop',medicalshop,{headers});
  }
  public deleteMedicalShop(medicalshop){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.http.delete<MedicalShop>('http://localhost:8088/deleteshop/'+medicalshop.id,{headers});
  }
  public updateMedicalShop(medicalshop){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.http.put<MedicalShop>('http://localhost:8088/UpdateMedicalShop/',medicalshop,{headers});
  }
  public getMedicalShop(id){
    const token = sessionStorage.getItem('token');
    sessionStorage.setItem('id',id);
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.http.get<MedicalShop>('http://localhost:8088/medicalShopById/'+id,{headers})
  }
}
