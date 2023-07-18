import { Component } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
public details:any=[];
constructor(private personservice:PersonService){
this.personservice.getdetails().subscribe(
  (data:any)=>{
    this.details=data;

  },
  (err:any)=>{
    alert("internal service error")
  }
)
}
}
