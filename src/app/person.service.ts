import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient:HttpClient) { }
  getdetails():Observable<any>{
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users")
  }

  
}
