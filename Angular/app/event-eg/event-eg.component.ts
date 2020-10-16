import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-eg',
  templateUrl: './event-eg.component.html',
  styleUrls: ['./event-eg.component.css']
})
export class EventEgComponent {

  constructor() { }
  myHandler(uname){
    console.log("Hello !! "+uname);
  }
  f1(){
    console.log("Focus on email in the form");
  }

}
