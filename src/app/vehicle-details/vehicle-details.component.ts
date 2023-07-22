import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent {

  public id:any="";
  public vehicle:any={};
  

  constructor (private activatedRoute:ActivatedRoute,private vehicleSerice:VehicleService){

    activatedRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id;

        vehicleSerice.getVehicle(this.id).subscribe(
          (data:any)=>{
            this.vehicle = data;
          }
        )
      }
    )
  }
}
