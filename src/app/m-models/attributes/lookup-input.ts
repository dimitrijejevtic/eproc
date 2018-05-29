import { PropertyField } from '../../m-interfaces/property-field';
import { Type } from '@angular/core';
import { DataType } from '../data-type.enum';
import { LookupInputComponent } from '../../builder/lookup-input/lookup-input.component';
import { Observable } from 'rxjs';

export class LookupInput implements PropertyField {
  name: string;
  value: any;
  expressionReadOnly: boolean;
  expressionVisibility: boolean;
  expressionValidation: string;
  dataType: DataType;
  caption: string;
  options: Observable<{}>;

  constructor() {
  }
  getComponent(): Type<LookupInputComponent> {
    return LookupInputComponent;
  }
  getType() {
    return typeof this;
  }
}
