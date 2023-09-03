import { Component } from '@angular/core';

@Component({
  selector: 'app-task1-a',
  templateUrl: './task1-a.component.html',
  styleUrls: ['./task1-a.component.scss']
})
export class Task1AComponent {
public num1:number=0;
public num2:number=0;

public result:any=[];
catch(value:any){
  this.result=value;
}
}
