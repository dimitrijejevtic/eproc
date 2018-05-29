import { TypeNamed } from '../m-interfaces/type-named';
import { Section } from './section';
import { PropertyField } from '../m-interfaces/property-field';
import { ObjectInstance } from './object-instance';

export class Step implements TypeNamed {
  typeName = 'Step';
  sections: Section[] = [];
  objectInstance: ObjectInstance;
  name: string;
  id: number;

  public getValue() {
    const res = new Object(null);
    this.sections.forEach(el => {
      res[el.name] = el.toAssociative();
    });
    return res;
  }
  getInnerProperties(): PropertyField[] {
    const ar = [];
    this.sections.forEach(el => {
      el.getValues().forEach(element => {
        ar.push(element);
      });
    });
    return ar;
  }
  getPropertyByName(name: string): PropertyField {
    let field = null;
    this.sections.forEach(sec => {
      const smt = sec.getValue(name);
      if (smt !== null) {
        field = smt;
        return;
      }
    });
    return field;
  }
}

