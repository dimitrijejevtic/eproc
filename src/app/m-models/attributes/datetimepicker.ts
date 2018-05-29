import { PropertyField } from '../../m-interfaces/property-field';
import { DataType } from '../data-type.enum';
import { Type } from '@angular/core';
import { DatetimepickerComponent } from '../../builder/datetimepicker/datetimepicker.component';

export class Datetimepicker implements PropertyField {
  name: string;
  value: any;
  expressionReadOnly: boolean;
  expressionVisibility: boolean;
  expressionValidation: string;
  dataType: DataType;
  caption: string;
  getComponent(): Type<any> {
    return DatetimepickerComponent;
  }
  getType() {
    return typeof this;
  }
}
