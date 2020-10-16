import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hwllo-world',
  templateUrl: './hwllo-world.component.html',
  //template:`<h1>this is a template try</h1>`,
  styleUrls: ['./hwllo-world.component.css']
})
export class HwlloWorldComponent implements OnInit {

  empName:string="Bhavya";

  constructor() { }

  ngOnInit() {
  }

}
