import { ObjectInstance, ListColumnDisplay } from '../m-models/object-instance';

/**
 * Extension method for usage outside of list-input
 */
export class Extensions {
  static getNgxData(objectInstances: ObjectInstance[], columnDef: ListColumnDisplay[]) {
    const rows = [];
    objectInstances.forEach(ins => {
      const row = {};
      columnDef.forEach(column => {
        const field = ins.getPropertyByName(column.name);
        const val = new Object(null);
        row[column.name] = field.value;
      });
      rows.push(row);
    });
    return rows;
  }
}
