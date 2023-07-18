import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent {
  public banks:any=[];
  public term:any=[];
  public column:string="";
  public order:string="";
  public limit:string="";
  public page:string="";
  constructor(private bankService:BankService){

this.bankService.getAccounts().subscribe(
  (data:any)=>{
    this.banks=data;
  },
  (err:any)=>{
    alert("internal server error");
  }
)
  }

 
  getFilteredAccounts(){

    this.bankService.getFilteredAccounts(this.term).subscribe(
      (data:any)=>{
        this.banks=data;
      },
      (err:any)=>{
        alert("internal server error");
      });
  }


  getSortedAccounts(){

    this.bankService.getSortedAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.banks=data;
      },
      (err:any)=>{
        alert("internal server error");
      });
  }

  getPagedAccounts(){

    this.bankService.getPagedAccounts(this.limit,this.page).subscribe(
      (data:any)=>{
        this.banks=data;
      },
      (err:any)=>{
        alert("internal server error");
      });
  }
}
