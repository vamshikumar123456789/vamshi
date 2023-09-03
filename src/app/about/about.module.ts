import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { CeoComponent } from './ceo/ceo.component';



@NgModule({
  declarations: [
    AboutCompanyComponent,
    CeoComponent
  ],
  imports: [
    CommonModule
  ],
   exports: [
    AboutCompanyComponent,
    CeoComponent
  ]
})
export class AboutModule { }
