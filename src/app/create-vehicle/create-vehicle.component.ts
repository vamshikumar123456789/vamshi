import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent {
public vehicleform: FormGroup =new FormGroup({
  Vehicle: new FormControl(),
  manufacturer:new FormControl(),
  model:new FormControl(),
  type: new FormControl(),
  fuel:  new FormControl(),

  color:new FormControl(),
  image: new FormControl(),

})
public id:any= "";
constructor(private vehicleService:VehicleService,private activatedRoute:ActivatedRoute){

  activatedRoute.params.subscribe(
    (data:any)=>{
      this.id = data.id;

      vehicleService.getVehicle(this.id).subscribe(
        (data:any)=>{
          this.vehicleform.patchValue(data);
        }
      )
    }
  )
}

submit(){
   console.log(this.vehicleform.value);

  if(this.id?.length>0){
    // update
    this.vehicleService.updateVehicle(this.id,this.vehicleform.value).subscribe(
      (data:any)=>{
        alert("vehicle update successfully")
      },
      (err:any)=>{
        alert("vehicle updation failed")
      }
    )
  }
  else{
    // create
    this.vehicleService.createVehicles(this.vehicleform.value).subscribe(
      (data:any)=>{
        alert("vehicle created successfully")
      }
    )
  }
 
  
}

}
