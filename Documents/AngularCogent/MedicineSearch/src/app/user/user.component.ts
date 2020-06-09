import { Component, OnInit } from '@angular/core';

import { UserService, User } from '../user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[];

  constructor(private user:UserService) { }

  ngOnInit(): void {
    this.user.getUsers().subscribe(response=>this.handleSuccessResponse(response))
  }
  handleSuccessResponse(response){
    this.users=response;
  }
  deleteUser(user:User):void{
    this.user.deleteUser(user).subscribe(data=>{this.users=this.users.
    filter(x=>x!==user);})
  }
  updateUser(user:User): void{
    this.user.updateUser(user).subscribe(data=>{this.users=this.users.
    filter(x=>x!==user);})
  }
  getUser(user:User):void{
    this.user.getUser(user).subscribe(data=>{this.users=this.users.
      filter(x=>x===user);})
  }
}