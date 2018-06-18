import { PropertyField } from '../../m-interfaces/property-field';
import { Type } from '@angular/core';
import { ListInputComponent } from '../../builder/list-input/list-input.component';
import { ObjectInstance } from './../object-instance';
import { DataType } from '../data-type.enum';
import { DictionaryAttribute } from '../dictionary-attribute';
import { ListColumnDisplay } from '../property-collection';

export class ListInput implements PropertyField {
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
  Caption: string;
  Value: ObjectInstance[];

  columnDefinition: ListColumnDisplay[];

  getNgxData() {
    const rows = [];
    this.Value.forEach(ins => {
      const row = {};
      this.columnDefinition.forEach(column => {
        const field = ins.getPropertyByName(column.name);
        const val = new Object(null);
        row[column.name] = field.Value;
      });
      rows.push(row);
    });
    return rows;
  }
  public applyRule(rule: PropertyField) {
    this.isValid = rule.isValid;
    this.isVisible = rule.isVisible;
    if (rule.Value !== undefined && rule.Value !== null) {
      this.Value = rule.Value;
    }
  }
  public getComponent(): Type<ListInputComponent> {
    return ListInputComponent;
  }
  public getType() {
    return typeof this;
  }
  getValue() {
    const res = [];
    this.Value.forEach(element => {
      res.push(element.getValues());
    });
    return res;
  }

  addItem(item: ObjectInstance) {
  }
}
