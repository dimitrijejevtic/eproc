import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Step } from '../m-models/step';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { PropertyField } from '../m-interfaces/property-field';
import { Extensions } from '../utils/extensions';
import { PropertyResolver } from '../m-resolvers/property-resolver';
import { ObjectInstance } from '../m-models/object-instance';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  public activeForm: BehaviorSubject<FormGroup>;
  constructor() {
    this.activeForm = new BehaviorSubject<FormGroup>(new FormGroup({}));
   }

   changeForm(step: Step, instance?: ObjectInstance) {
    let props: PropertyField[] = [];

    props = Extensions.getStepProperties(step);
    if (instance !== undefined && instance !== null) {
      for (let i = 0; i < props.length; i++) {
        const val = instance.getPropertyByName(props[i].DictionaryAttributeParent.Name);
        if (val !== null)
        props[i].Value = val.Value;
      }
    }
    const resolr = new PropertyResolver<any>();
    this.activeForm.next(resolr.toFormGroup(props));
   }

}

