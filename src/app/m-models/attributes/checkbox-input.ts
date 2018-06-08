import { Type } from '@angular/core';
import { CheckboxInputComponent } from '../../builder/checkbox-input/checkbox-input.component';
import { PropertyField } from '../../m-interfaces/property-field';
import { DataType } from '../data-type.enum';
import { DictionaryAttribute } from '../dictionary-attribute';
import { TypeNamed } from '../../m-interfaces/type-named';

export class CheckboxInput implements PropertyField {

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
  ExpressionReadOnly: string;
  ExpressionVisibility: string;
  ExpressionValidation: string;
  DataType: string;
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
  Value: any;
  Caption: string;

  public applyRule(rule: PropertyField) {
    this.isValid = rule.isValid;
    this.isVisible = rule.isVisible;
    if (rule.Value !== undefined && rule.Value !== null) {
      this.Value = rule.Value;
    }
  }
  public getComponent(): Type<CheckboxInputComponent> {
    return CheckboxInputComponent;
  }
  public getType() {
    return typeof this;
  }
}
