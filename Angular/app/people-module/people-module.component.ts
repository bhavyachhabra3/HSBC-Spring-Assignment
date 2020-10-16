import { Component, OnInit } from '@angular/core';
import { modulex } from './modulex';

@Component({
  selector: 'app-people-module',
  templateUrl: './people-module.component.html',
  styleUrls: ['./people-module.component.css']
})
export class PeopleModuleComponent implements OnInit {

  constructor() { }
  modulex=new modulex();
  getDetails(){
    return this.modulex.peoplenames;
  }
  ngOnInit() {
  }

}
