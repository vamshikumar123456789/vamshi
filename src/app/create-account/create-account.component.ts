import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {

  public accountForm:FormGroup = new FormGroup({
    account_name:new FormControl(),
    available_balance:new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profie_picture: new FormControl(),
    id:new FormControl(),
  })

  constructor(private bankService:BankService){}
  
submit(){
  console.log(this.accountForm);

  this.bankService.createAccounts(this.accountForm.value).subscribe(
    (data:any)=>{
      alert("account created successfully")
    },
    (err:any)=>{
      alert("account creation failed");
    }
  )
  
}

}

