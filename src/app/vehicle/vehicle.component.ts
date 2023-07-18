import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent {

  public vehicles:any= [];
  public term:string="";
  public column:string="";
  public order:string="";
  public limit:string="";
  public page:string="";
constructor(private vehicleService: VehicleService){

  this.vehicleService.getVehicles().subscribe(
    (data:any)=>{
      this.vehicles=data;
    },
    (err:any)=>{
      alert("internal server error");
    }
  )
}
getFilteredVehicles(){
  this.vehicleService.getFilteredVehicles(this.term).subscribe(
    (data:any)=>{
      this.vehicles=data;
    },
    (err:any)=>{
      alert("internal server error");
    }
  ) 
}
getSortedVehicles(){
  this.vehicleService.getSortedVehicles(this.column,this.order).subscribe(
    (data:any)=>{
      this.vehicles=data;
    },
    (err:any)=>{
      alert("internal server error");
    }
  ) 
}

getPagedVehicles(){
  this.vehicleService.getPagedVehicles(this.limit,this.page).subscribe(
    (data:any)=>{
      this.vehicles=data;
    },
    (err:any)=>{
      alert("internal server error");
    }
  ) 
}

deleteVehicles(id:any){
  this.vehicleService.deleteVehicles(id).subscribe(
    (data:any)=>{
      alert("deleted successfully");
      location.reload();
    },
    (err:any)=>{
      alert("internal server error");
    }
  ) 
}


}
