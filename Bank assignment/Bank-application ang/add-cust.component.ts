import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BankService } from '../bank.service';
import { Customer } from '../Customer';
import { CustomerAccount } from '../CustomerAccount';

@Component({
  selector: 'app-add-cust',
  templateUrl: './add-cust.component.html',
  styleUrls: ['./add-cust.component.css']
})
export class AddCustComponent implements OnInit {

  customer:Customer

  constructor(private bankService:BankService) { }

  ngOnInit() {
  }

  addCust(form:NgForm){
    this.customer = form.value
    this.bankService.addCust(this.customer).subscribe(data=>this.customer=data)
  }

}