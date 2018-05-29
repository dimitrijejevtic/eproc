import { PropertyField } from '../m-interfaces/property-field';
import { TypeNamed } from '../m-interfaces/type-named';
import { Section } from './section';

// TODO simplify classes
export class ObjectInstance implements TypeNamed {

  typeName = 'ObjectInstance';
  sections: Section[];
  private _values: PropertyCollection<PropertyField> = new PropertyCollection<PropertyField>();

  private _id: number;
  public get id(): number {
    return this._id;
  }

  constructor() {
    this._id = Math.round(Math.random() * 10000);
    this.sections = [];
  }

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
  public exists(key: string): boolean {
    if (key !== null && key !== '') {
      return this._values.get(key) !== null;
    }
    return false;
  }

  public setValue(key: string, value: any): void {
    this._values.set(key, value);
  }

  public removeValue(key: string) {
    if (this.exists(key))
      this._values.deletePair(key);
  }
  public getValues() {
    if (this._values !== null)
      return this._values.getValue();
    return null;
  }
  public get length(): number {
    return this._values.length;
  }
  public toAssociative() {
    const json = Object.create(null);
    this._values.getValue().forEach((value, key) => {
      json[key] = value;
    });
  return json;
  }

}


export class PropertyCollection<T>  {
  private _propertys: Map<string, T> = new Map<string, T>();

  public get length(): number {
    return this._propertys.size;
  }
  public get(key: string): T {
    return this._propertys.get(key);
  }
  public set(key: string, value: T): void {
    this._propertys.set(key, value);
  }
  public deletePair(key: string): void {
    this._propertys.delete(key);
  }
  public getValue() {
    return this._propertys;
  }
}

export class ListColumnDisplay {
  name: string;
  type: string;
}
