import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[stepContentTarget]'
})
export class StepContentTargetDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
