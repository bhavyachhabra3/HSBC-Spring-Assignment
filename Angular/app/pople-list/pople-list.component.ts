import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pople-list',
  templateUrl: './pople-list.component.html',
  styleUrls: ['./pople-list.component.css']
})
export class PopleListComponent implements OnInit {

  constructor() { }
  peoplenames:any[] = [
    {"name":"Bhavya","age":22,"gender":"male"},
    {"name":"Aditi","age":22,"gender":"female"},
    {"name":"Bharat","age":22,"gender":"male"}
  ]
  ngOnInit() {
  }

}
