import {Directive, ElementRef, HostListener, HostListener} from '@angular/core';

@Directive({
  selector: '[appSurvolActive]'
})
export class SurvolActiveDirective {

  constructor(private survol: ElementRef) {}

  setBackground(color)
  {
    this.survol.nativeElement.style.background = color;
  }
  @HostListener('mouseenter') onMouseEnter()
  {
    this.setBackground('grey');
  }

  @HostListener('mouseleave') onMouseLeave()
  {
      this.setBackground('white');
  }
}




