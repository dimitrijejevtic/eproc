import { PropertyField } from '../../m-interfaces/property-field';
import { TextInputComponent } from '../../builder/text-input/text-input.component';
import { Type } from '@angular/core';
import { DataType } from '../data-type.enum';

export class TextInput implements PropertyField {
  dataType: DataType;
  expressionReadOnly: boolean;
  expressionVisibility: boolean;
  expressionValidation: string;
  caption: string;
  value: any;
  name: string;
  decimalStep: string;
  getType() {
    return typeof this;
  }
  getComponent(): Type<TextInputComponent> {
    return TextInputComponent;
  }
  toHtmlType(): string {
    let dtype = 'text';
    switch (this.dataType) {
      case  DataType.string: {
        dtype = 'text';
        break;
      }
      case DataType.integer : {
        dtype = 'number';
        break;
      }
      case DataType.decimal: {
        dtype = 'number';
      }
    }
    return dtype;
  }
  getStep() {
    if (this.dataType === DataType.decimal)
      return this.decimalStep;
    else return '';
  }
}
