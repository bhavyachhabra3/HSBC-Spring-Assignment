import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  constructor() { }
  /*employees:string="Employee Details";
  empnum=[1,2,3];
  empname=["Bhavya","Bharat","Aditi"];
  salary=[7800,7500,7700];
  desg=["TSE","TSE","TSE"];

  clearform(){
    this.empnum.splice(0,this.empnum.length);
    this.empname.splice(0,this.empname.length);
    this.salary.splice(0,this.salary.length);
    this.desg.splice(0,this.desg.length);
  }*/
  empdetails:any[] = [
    {"num":1,"name":"Bhavya","salary":4500,"desg":"TSE"},
    {"num":2,"name":"Aditi","salary":4400,"desg":"TSE"},
    {"num":3,"name":"Bharat","salary":4450,"desg":"TSE"}
  ]
  lcheck:boolean=false;
  tcheck:boolean=false;
  clearform(){
    this.empdetails.splice(0,this.empdetails.length);
  }
  tabledisp(){
    this.tcheck=true;
    this.lcheck=false;
    return this.empdetails;
  }

  listdisp(){
    this.lcheck=true;
    this.tcheck=false;
    return this.empdetails;
  }
  hide(event){
    event.target.style.visibility = 'hidden';
   }
  ngOnInit() {
  }

}
