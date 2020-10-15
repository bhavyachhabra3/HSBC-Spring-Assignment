import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  cname:string; 
  loca:string;
  totals:number;
  constructor() {
    this.cname="HSBC";
    this.loca="Hyderabad";
    this.totals=200;
   }

  ngOnInit() {
  }

}
