import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBgCountry]'
})
export class BgCountryDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
 }

}
