import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
export class Medicine{
  constructor(public id:number,
    public name:string,
    public code:string,
    public qty:number,
    public price:number
 ){}
}

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http:HttpClient) { }

  public getMedicines():Observable<any>{
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.http.get<Medicine>('http://localhost:8088/medicines',{headers});
  }
  public createMedicine(id, medicine){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.http.post<Medicine>('http://localhost:8088/Addmedicine/'+id,medicine,{headers});
  }
  public deleteMedicine(medicine){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.http.delete<Medicine>('http://localhost:8088/medicinedelete/'+medicine.id,{headers});
  }
  public updateMedicine(medicine){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.http.put<Medicine>('http://localhost:8088/updatemedicine/',medicine,{headers});
  }
  public getMedicine(medicine){
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({'Content-Type':'application/json', Authorization: token});
    return this.http.get<Medicine>('http://localhost:8088/medicine/'+medicine.name,{headers})
  }
} 
