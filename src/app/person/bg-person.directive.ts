import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBgPerson]'
})
export class BgPersonDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'blue';
 }

}
