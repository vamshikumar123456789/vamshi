import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { NetBankingComponent } from './net-banking/net-banking.component';
import { UpiPaymentsComponent } from './upi-payments/upi-payments.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';


@NgModule({
  declarations: [
    NetBankingComponent,
    UpiPaymentsComponent,
    CardPaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
