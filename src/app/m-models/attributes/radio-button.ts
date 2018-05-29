import { PropertyField } from '../../m-interfaces/property-field';
import { RadioButtonComponent } from '../../builder/radio-button/radio-button.component';
import { Type } from '@angular/core';
import { DataType } from '../data-type.enum';

export class RadioButton implements PropertyField {
  dataType: DataType;
  expressionReadOnly: boolean;
  expressionVisibility: boolean;
  expressionValidation: string;
  value: any;
  name: string;
  caption: string;
  getComponent(): Type<RadioButtonComponent> {
    return RadioButtonComponent;
  }
  getType() {
    return typeof this;
  }
}
