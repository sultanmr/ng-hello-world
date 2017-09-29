import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format;
  constructor(private el: ElementRef) { 
    
  }


  // @HostListener ('focus') onFocus () {
  //   console.log ("on focus");
  // }

  @HostListener ('blur') onBlur () { //blue means losing focus
    let strVal:string = this.el.nativeElement.value;

    if (this.format=='lowercase')
    this.el.nativeElement.value = strVal.toLowerCase();
    else
    this.el.nativeElement.value = strVal.toUpperCase();
  }

 
}
