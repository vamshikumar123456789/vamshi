import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent {
  public phone:number = 9685744569;
  public name:string = "john";
  public isIndian:boolean=true;

  public prices:number[]=[10,20,30,40,50];
  public cities:string[]=['hyd','bang','che'];

  public user:any ={
    name:'abc',
    age:20
  };
}
