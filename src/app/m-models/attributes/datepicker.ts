import { PropertyField } from '../../m-interfaces/property-field';
import { Type } from '@angular/core';
import { DataType } from '../data-type.enum';
import { DatepickerComponent } from '../../builder/datepicker/datepicker.component';

export class Datepicker implements PropertyField {
  name: string;
  value: any;
  expressionReadOnly: boolean;
  expressionVisibility: boolean;
  expressionValidation: string;
  dataType: DataType;
  caption: string;
  getComponent(): Type<any> {
    return DatepickerComponent;
  }
  getType() {
    return typeof this;
  }
}
