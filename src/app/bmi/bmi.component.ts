import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BMIComponent {
 public w:number = 0;
 public h:number = 0;
 public result:number=0;

 cal(){
  this.result =this.w/((this.h/100)*(this.h/100));
 }
}
