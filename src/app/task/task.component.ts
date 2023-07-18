import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

public term:string="";

public products:any = [
  {productname:'pen',price:10,rating:3,freedelivery:true},
  {productname:'phone',price:100,rating:2,freedelivery:false},
  {productname:'shirt',price:400,rating:4,freedelivery:true},
  {productname:'cap',price:200,rating:5,freedelivery:false},
  {productname:'mobilecase',price:300,rating:2,freedelivery:true},
  {productname:'remote',price:400,rating:2.5,freedelivery:false}
]

search(){
  this.products = this.products.filter((product:any)=>product.productname.includes(this.term))
}
only(){
  this.products =this.products.filter((product:any)=>product.freedelivery==true);

  
}
 

phigh(){
this.products = this.products.sort((a:any,b:any)=>b.price-a.price);
}
plow(){
this.products = this.products.sort((a:any,b:any)=>a.price-b.price);
}
rhigh(){
this.products = this.products.sort((a:any,b:any)=>b.rating-a.rating);
}
rlow(){
this.products = this.products.sort((a:any,b:any)=>a.rating-b.rating);
}
app(){
  this.products = this.products.map((product:any)=>{
    product.price=product.price/2
    return product
  });
}
pwd(){
  this.products =this.products.map((product:any)=>{
    if (product.freedelivery==false){
      product.price=product.price+50
    return product
    }
    else{
      return product
    }
    
  })
}
delete(i:any){
  this.products.splice(i,1)
}





}