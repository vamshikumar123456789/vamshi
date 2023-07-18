import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent {

  public mails:any=[];
  constructor(private mailService: MailService){
    this.mailService.getMails().subscribe(
      (data:any)=>{
        this.mails=data;
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }
}
