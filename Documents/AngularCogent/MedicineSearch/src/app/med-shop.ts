import { User } from './service/auth.service';
import { Medicine } from './service/medicine.service';

export class MedShop {
    public id:number;
    public shopName:string;
    public state:string;
    public city:string;
    public address:string;
    public phone:string;
    public open247:boolean;
    public users:User[];
    public medicines: Medicine[];

    constructor( id:number,shopName:string, state:string, city:string, address:string, phone:string, open247:boolean){
        this.id = id;
        this.shopName = shopName;
        this.state=state;
        this.city=city;
        this.address=address;
        this.phone=phone;
        this.open247=open247;

    }

    
}
