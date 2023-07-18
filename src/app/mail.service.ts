import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private httpClient:HttpClient) { }
  getMails():Observable<any>{
    return this.httpClient.get("https://jsonplaceholder.typicode.com/todos")
  }
}
