import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent {
public num1 :number=0;
public result:number=0;

area(){
  this.result = 22/7*(this.num1*this.num1);
}

perimeter(){
  this.result =22/7*(2*this.num1);
}
}
