import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent {
public names:string[]= ['ajay','bharath','virat'];
public states:string[]= ['telangana','ap','tamil nadu','karnataka']

public products:any=[
  {name:'pen',price:20},
  {name:'mobile',price:13000},
  {name:'watch',price:5000}
]

public students:any=[
  {name:'a',phone:9494,class:10,marks:100},
  {name:'b',phone:8500,class:8,marks:80},
  {name:'c',phone:9391,class:9,marks:90}
]

public num:number = 0;
}
