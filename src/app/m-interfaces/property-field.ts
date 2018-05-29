import { Component, ComponentFactory, Type } from '@angular/core';
import { BuilderComponent } from './builder-component';
import { DataType } from '../m-models/data-type.enum';

export interface PropertyField {
  name: string;
  value: any;
  expressionReadOnly: boolean;
  expressionVisibility: boolean;
  expressionValidation: string;
  dataType: DataType;
  caption: string;
  getComponent(): Type<any>;
  getType(): any;
}
