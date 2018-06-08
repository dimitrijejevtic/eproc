import { Injectable } from '@angular/core';
import { Step } from '../m-models/step';
import { BehaviorSubject } from 'rxjs';
import { StepService } from './step.service';
import { PropertyRule, TargetType } from '../m-models/property-rule';
import { PropertyField } from '../m-interfaces/property-field';

@Injectable({
  providedIn: 'root'
})
export class StepValidationService {
  public validatingAttribute: BehaviorSubject<PropertyField>;
  public validatingStep: BehaviorSubject<Step>;
  constructor() {
    this.validatingStep = new BehaviorSubject<Step>(new Step());
    this.validatingAttribute = new BehaviorSubject<PropertyField>(new PropertyField());   }

  stepValidated(step: Step) {
    this.validatingStep.next(step);
  }
  attrValidated(attr: PropertyField) {
    this.validatingAttribute.next(attr);
  }

}
