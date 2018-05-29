import { PropertyField } from '../../m-interfaces/property-field';
import { Type } from '@angular/core';
import { ListInputComponent } from '../../builder/list-input/list-input.component';
import { ObjectInstance, ListColumnDisplay } from './../object-instance';
import { DataType } from '../data-type.enum';

export class ListInput implements PropertyField {
  dataType: DataType;
  expressionReadOnly: boolean;
  expressionVisibility: boolean;
  expressionValidation: string;
  value: ObjectInstance[];
  name: string;
  caption: string;
  columnDefinition: ListColumnDisplay[];

  getNgxData() {
    const rows = [];
    this.value.forEach(ins => {
      const row = {};
      this.columnDefinition.forEach(column => {
        const field = ins.getPropertyByName(column.name);
        const val = new Object(null);
        row[column.name] = field.value;
      });
      rows.push(row);
    });
    return rows;
  }
  getComponent(): Type<ListInputComponent> {
    return ListInputComponent;
  }
  getType() {
    return typeof this;
  }
  getValue() {
    const res = [];
    this.value.forEach(element => {
      res.push(element.getValue());
    });
    return res;
  }

  addItem(item: ObjectInstance) {
  }
}
