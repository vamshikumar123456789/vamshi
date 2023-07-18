import { Component } from '@angular/core';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.scss']
})
export class MemesComponent {
  public memes:any={};
constructor(private memesService:MemesService){
  this.memesService.getmeme().subscribe(
    (data:any)=>{
      this.memes=data.data.memes;
    },
   (err:any)=>{
  alert ("ineternal servor error")
   }
  )
}


}
