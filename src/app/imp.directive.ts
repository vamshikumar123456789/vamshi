import { style } from '@angular/animations';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImp]'
})
export class ImpDirective {

  constructor(private elementRef :ElementRef) { 

    elementRef.nativeElement.style.color = "pink";
    elementRef.nativeElement.style.fontStyle = "italic";
    elementRef.nativeElement.style.textDecoration = "underline"
  }

}
