import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { NetBankingComponent } from './net-banking/net-banking.component';
import { UpiPaymentsComponent } from './upi-payments/upi-payments.component';

const routes: Routes = [
  {path:'card-payment',component:CardPaymentComponent},
  {path:'net-banking',component:NetBankingComponent},
  {path:'upi-payments',component:UpiPaymentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
