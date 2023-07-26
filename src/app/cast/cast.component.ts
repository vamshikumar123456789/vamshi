import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss']
})
export class CastComponent {

  public cartCount:number=0;

  constructor(private commonSerive:CommonService){

    commonSerive.getValue().subscribe(
      (data:any)=>{
        this.cartCount = data;
      }
    )
  }
}
