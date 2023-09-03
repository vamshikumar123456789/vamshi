import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task1-b',
  templateUrl: './task1-b.component.html',
  styleUrls: ['./task1-b.component.scss']
})
export class Task1BComponent {
@Input() public num1:number=0;
@Input() public num2:number=0;

@Output() public info:EventEmitter<any>=new EventEmitter();

sum(){
  this.info.emit(this.num1+this.num2)
}
sub(){
  this.info.emit(this.num1-this.num2)
}
mul(){
  this.info.emit(this.num1*this.num2)
}
div(){
  this.info.emit(this.num1/this.num2)
}
}
