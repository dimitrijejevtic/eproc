import { PropertyField } from '../../m-interfaces/property-field';
import { Type } from '@angular/core';
import { DataType } from '../data-type.enum';
import { LookupInputComponent } from '../../builder/lookup-input/lookup-input.component';
import { Observable } from 'rxjs';
import { DictionaryAttribute } from '../dictionary-attribute';

export class LookupInput implements PropertyField {
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

  Options: Observable<{}>;
  constructor() {
  }
  public applyRule(rule: PropertyField) {
    this.isValid = rule.isValid;
    this.isVisible = rule.isVisible;
    if (rule.Value !== undefined && rule.Value !== null) {
      this.Value = rule.Value;
    }
  }
  public getComponent(): Type<LookupInputComponent> {
    return LookupInputComponent;
  }
  public getType() {
    return typeof this;
  }
}
