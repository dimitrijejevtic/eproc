import { PropertyField } from '../../m-interfaces/property-field';
import { DataType } from '../data-type.enum';
import { Type } from '@angular/core';
import { SelectInputComponent } from '../../builder/select-input/select-input.component';
import { DictionaryAttribute } from '../dictionary-attribute';
import { Observable } from 'rxjs';

export class SelectInput implements PropertyField {
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
  Value: any;
  ExpressionReadOnly: string;
  ExpressionVisibility: string;
  ExpressionValidation: string;
  DataType: string;
  Caption: string;
  Options: Observable<{}>;

  public applyRule(rule: PropertyField) {
    this.isValid = rule.isValid;
    this.isVisible = rule.isVisible;
    if (rule.Value !== undefined && rule.Value !== null) {
      this.Value = rule.Value;
    }
  }
  public getComponent(): Type<SelectInputComponent> {
    return SelectInputComponent;
  }
  public getType() {
    return typeof this;
  }
}
