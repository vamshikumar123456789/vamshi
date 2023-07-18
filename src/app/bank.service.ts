import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private httpClient:HttpClient) { }

  getAccounts():Observable<any>{

    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
  }
  
  getFilteredAccounts(term:any):Observable<any>{

    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);
  }

  getSortedAccounts(column:any,order:any):Observable<any>{

    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order);
  }

  getPagedAccounts(limit:any,page:any):Observable<any>{

    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit="+limit+"&page="+page);
  }
createAccounts(data:any):Observable<any>{
  return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data);
}

}
