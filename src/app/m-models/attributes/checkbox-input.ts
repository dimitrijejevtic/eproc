import { Type } from '@angular/core';
import { CheckboxInputComponent } from '../../builder/checkbox-input/checkbox-input.component';
import { PropertyField } from '../../m-interfaces/property-field';
import { DataType } from '../data-type.enum';

export class CheckboxInput implements PropertyField {
  dataType: DataType;
  expressionReadOnly: boolean;
  expressionVisibility: boolean;
  expressionValidation: string;
  value: any;
  name: string;
  caption: string;
  getComponent(): Type<CheckboxInputComponent> {
    return CheckboxInputComponent;
  }
  getType() {
    return typeof this;
  }
}
