import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  email:string;
  num:number;
  address:string;
  constructor() { 
    this.email="asc@hsbc.co.in";
    this.num=9876543210;
    this.address="Cyberabad,Hyderabad";
  }

  ngOnInit() {
  }

}
