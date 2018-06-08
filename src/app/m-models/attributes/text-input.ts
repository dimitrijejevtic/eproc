import { PropertyField } from '../../m-interfaces/property-field';
import { TextInputComponent } from '../../builder/text-input/text-input.component';
import { Type } from '@angular/core';
import { DataType } from '../data-type.enum';
import { DictionaryAttribute } from '../dictionary-attribute';

export class TextInput implements PropertyField {
  ExpressionValiationMessageKey: string;
  isValid: boolean;
  isVisible: boolean;
  DictionaryAttributeId: number;
  DictionaryDataUnitId: number;
  EventParent: any;
  NullCheckEnable: boolean;
  OrderNo: number;
  RelationshipNavigationEnabled: boolean;
  DictionaryAttributeParent: DictionaryAttribute;
  EntityState: number;
  Id: number;
  IsNew: boolean;
  IsReadOnly: boolean;
  DataTyped: DataType;
  ControlType: string;
  CaptionKey: string;
  Length: number;
  DomainDataSourceId: number;
  ExpressionFormat: string;
  ColumnName: string;
  ObjectMetaId: number;
  InputPlaceholder: string;
  HelpKey: string;
  Status: number;
  DataType: string;
  ExpressionReadOnly: string;
  ExpressionVisibility: string;
  ExpressionValidation: string;
  Caption: string;
  Value: any;
  DecimalStep = '.01';

  public applyRule(rule: PropertyField) {
    this.isValid = rule.isValid;
    this.isVisible = rule.isVisible;
    if (rule.Value !== undefined && rule.Value !== null) {
      this.Value = rule.Value;
    }
  }
  public getType() {
    return typeof this;
  }
  public getComponent(): Type<TextInputComponent> {
    return TextInputComponent;
  }
  toHtmlType(): string {
    let dtype = 'text';
    switch (this.DictionaryAttributeParent.DataType) {
      case  'string': {
        dtype = 'text';
        break;
      }
      case 'integer' : {
        dtype = 'number';
        break;
      }
      case 'decimal': {
        dtype = 'number';
        break;
      }
    }
    return dtype;
  }
  getStep() {
    if (this.DictionaryAttributeParent.DataType === 'decimal')
      return this.DecimalStep;
    else return '';
  }
}
