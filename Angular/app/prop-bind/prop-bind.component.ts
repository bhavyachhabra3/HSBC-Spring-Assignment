import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-bind',
  templateUrl: './prop-bind.component.html',
  styleUrls: ['./prop-bind.component.css']
})
export class PropBindComponent implements OnInit {

  myimage;
  btnLabel;
  constructor() {
    this.btnLabel="login"; 
    this.myimage="https://image.shutterstock.com/image-photo/planet-earth-this-image-elements-260nw-374827657.jpg";
  }

  ngOnInit() {
  }

}
