import { Component, ComponentFactory, Type } from '@angular/core';
import { BuilderComponent } from './builder-component';
import { DataType } from '../m-models/data-type.enum';
import { DictionaryAttribute } from '../m-models/dictionary-attribute';
import { PropertyRule } from '../m-models/property-rule';

export class PropertyField {
  //#region database fields
  CaptionKey: string;
  ColumnName: string;
  ControlType: string;
  EntityState: number;
  ExpressionFormat: string;
  HelpKey: string;
  Id: number;
  InputPlaceholder: string;
  IsNew: boolean;
  IsReadOnly: boolean;
  Length: number;
  DataTyped: DataType;
  DataType: string;
  DomainDataSourceId: number;
  ObjectMetaId: number;
  Status: number;
  DictionaryAttributeId: number;
  DictionaryDataUnitId: number;
  EventParent: any;
  NullCheckEnable: boolean;
  OrderNo: number;
  RelationshipNavigationEnabled: boolean;
  ExpressionReadOnly: string;
  ExpressionVisibility: string;
  ExpressionValidation: string;
  DictionaryAttributeParent: DictionaryAttribute;
  ExpressionValiationMessageKey: string;
  //#endregion
  isValid = false;
  isVisible = false;
  Value: any;

  Caption: string;
  getComponent(): Type<any> {
    return null;
  }
  getType(): any {
  }

}

