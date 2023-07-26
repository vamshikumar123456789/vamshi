import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { domainValidator, stateValidator } from '../validators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

public userForm:FormGroup = new FormGroup({

  name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  age: new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)]),
  phone: new FormControl('',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
  email: new FormControl('',[Validators.required,Validators.email, domainValidator]),
  address:new FormGroup({
    hno:new FormControl(),
    state:new FormControl('',[Validators.required,Validators.minLength(5),stateValidator]),
    pin: new FormControl('',[Validators.required,Validators.minLength(6)]),
  }),
  type: new FormControl(),
  busfee: new FormControl(),
  hostelfee: new FormControl(),
  cards: new FormArray([]),

});
get cardsFormArray(){
 return this.userForm.get('cards') as FormArray;
}

addCard(){

  this.cardsFormArray.push(
    new FormGroup({
      no: new FormControl('',[Validators.required]),
      exp: new FormControl(),
      cvv:new FormControl(),
    })
  )
}

deletecard(i:number){
  this.cardsFormArray.removeAt(i)
}

submit(){
  console.log(this.userForm);
}
}
