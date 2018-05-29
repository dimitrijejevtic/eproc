import { PropertyField } from '../../m-interfaces/property-field';
import { DataType } from '../data-type.enum';
import { Type } from '@angular/core';
import { SelectInputComponent } from '../../builder/select-input/select-input.component';

export class SelectInput implements PropertyField {
  name: string;
  value: any;
  expressionReadOnly: boolean;
  expressionVisibility: boolean;
  expressionValidation: string;
  dataType: DataType;
  caption: string;
  options: any[];
  getComponent(): Type<SelectInputComponent> {
    return SelectInputComponent;
  }
  getType() {
    return typeof this;
  }
}
