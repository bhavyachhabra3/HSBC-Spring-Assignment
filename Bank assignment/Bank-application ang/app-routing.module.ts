import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-cust/add-cust.component';
import { RetrieveCustomerComponent } from './retrieve-cust/retrieve-cust.component';

const routes: Routes = [
  {path:"addCust", component:AddCustComponent},
  {path:"retrieveCust", component:RetrieveCustComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }