import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  id:string="";
  name:string="";
  bdate:Date
  sdate:Date;
  total:string="";

  clicked:boolean=false;
  constructor() { }

  onClick(){
    this.clicked=true;
  }
  ngOnInit() {
  }
  
}
