import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../userLogin';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user101:User={uname:abcd"",password:"efgh"};
  user102:User;
  constructor() { }

  ngOnInit() {
  }
  onsubmit(ngform:NgForm){
    this.user102=ngform.value;
    if(this.user102.uname==this.user101.uname && this.user102.password==this.user101.password)
      console.log("Login validated");
    else console.log("Invalid Credentials")
  }

}