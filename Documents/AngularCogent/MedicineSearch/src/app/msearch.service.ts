import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


export class MedSearchRespo{
  constructor(public name:string,public shopName:string,public state:string,public city:string,public address:string,public phone:string,public open247:boolean,public qty:number){}
}
// export class BloodSearchRespo{
//   constructor(public bloodType:string,public bloodBankName:string,public state:string,public city:string,public address:string,public phone:string,public open247:boolean,public qty:number){}
// }


@Injectable({
  providedIn: 'root'
})
export class MsearchService {
  
  public medsrData: MedSearchRespo[];
  constructor(private http:HttpClient) { }
  public getMedsearch(name){
    console.log(name);
  
    return this.http.get<MedSearchRespo[]>('http://localhost:8088/search/getInfo/'+name);
  }
   public getMedsearch1(name){
    console.log(name);
   
    return this.http.get<MedSearchRespo[]>('http:/localhost:8088/search/getInfoB/'+name);
   }
  }
