import { PropertyField } from '../../m-interfaces/property-field';
import { TextareaInputComponent } from '../../builder/textarea-input/textarea-input.component';
import { Type } from '@angular/core';
import { DataType } from '../data-type.enum';
import { DictionaryAttribute } from '../dictionary-attribute';

export class TextareaInput implements PropertyField {
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

  public applyRule(rule: PropertyField) {
    this.isValid = rule.isValid;
    this.isVisible = rule.isVisible;
    if (rule.Value !== undefined && rule.Value !== null) {
      this.Value = rule.Value;
    }
  }
  public getComponent(): Type<TextareaInputComponent> {
    return TextareaInputComponent;
  }
  public getType() {
    return typeof this;
  }
}
