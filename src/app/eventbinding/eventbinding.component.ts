import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.scss']
})
export class EventbindingComponent {
test(){
  alert("clicked");
}
test2(){
  alert("double clicked");
}
test3(){
  alert("key down");
}
test4(){
  alert("key up");
}
test5(){
  alert("keypress");
}
test6(){
  alert("mouse enter");
}
test7(){
  alert("mouse leave");
}
}
