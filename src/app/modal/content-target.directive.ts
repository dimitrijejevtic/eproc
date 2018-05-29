import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[modalContentTarget]'
})
export class ContentTargetDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
