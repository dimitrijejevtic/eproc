import { PropertyField } from '../../m-interfaces/property-field';
import { TextareaInputComponent } from '../../builder/textarea-input/textarea-input.component';
import { Type } from '@angular/core';
import { DataType } from '../data-type.enum';

export class TextareaInput implements PropertyField {
  dataType: DataType;
  expressionReadOnly: boolean;
  expressionVisibility: boolean;
  expressionValidation: string;
  caption: string;
  value: any;
  name: string;
  getComponent(): Type<TextareaInputComponent> {
    return TextareaInputComponent;
  }
  getType() {
    return typeof this;
  }
}
