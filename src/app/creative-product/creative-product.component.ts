import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-creative-product',
  templateUrl: './creative-product.component.html',
  styleUrls: ['./creative-product.component.scss']
})
export class CreativeProductComponent {

public userForm:FormGroup = new FormGroup({

  name: new FormControl(),
  price: new FormControl(),
  color: new FormControl(),
  features:new FormGroup({
    ram: new FormControl(),
    battery: new FormControl(),
    processor: new FormControl(),
  }),


  comments:new FormArray([]),
  payments: new FormControl(),
  upi: new FormControl(),
  netbanking:new FormControl(),
    
});

get commentsFormArray(){

  return this.userForm.get('comments') as FormArray
}

addcomments(){
  this.commentsFormArray.push(
    new FormGroup({

      Name: new FormControl(),
    time: new FormControl(),
    message: new FormControl()

    })
  )

}

submit(){

  console.log(this.userForm);
}

delete(i:number){

  this.commentsFormArray.removeAt(i)
}

}
