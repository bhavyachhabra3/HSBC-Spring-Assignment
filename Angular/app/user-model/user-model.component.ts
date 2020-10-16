import { Component, OnInit } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'app-user-model',
  templateUrl: './user-model.component.html',
  styleUrls: ['./user-model.component.css']
})
export class UserModelComponent {

  model=new Model();
  contact;
  getName(){
    return this.model.user;
  }
  getToDoItems(){
    return this.model.items;
  }
  constructor() { 
    this.contact=this.model.contact;
  }


}
