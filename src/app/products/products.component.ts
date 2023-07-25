import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  public products:Product[]=[];

  constructor(private productservice:ProductsService){
    this.productservice.getProducts().subscribe(
      (data:Product[])=>{
        this.products=data;
      },
      (err:any)=>{
        alert("unavailable")
      }
    )
  }

}
