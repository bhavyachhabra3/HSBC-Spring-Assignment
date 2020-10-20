import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BankService } from '../bank.service';
import { Customer } from '../Customer';
import { CustomerAccount } from '../CustomerAccount';

@Component({
  selector: 'app-retrieve-cust',
  templateUrl: './retrieve-cust.component.html',
  styleUrls: ['./retrieve-cust.component.css']
})
export class RetrieveCustComponent implements OnInit {
  custId:number
  customerAccount:CustomerAccount
  constructor(private bankService:BankService) { }

  ngOnInit() {
  }

  getCustomer(form:NgForm){
    console.log(form.value)
    this.bankService.getCust(form.value.custId).subscribe(data=>this.customerAccount=data);
  }

}