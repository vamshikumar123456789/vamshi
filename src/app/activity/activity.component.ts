import { Component } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {
public activity:any={};
constructor(private activityService:ActivityService){
  this.activityService.gettask().subscribe(
    (data:any)=>{
      this.activity=data;
    },
    
  )
}
refresh(){
  this.activityService.gettask().subscribe(
    (data:any)=>{
      this.activity=data;
    });
    

}


}
