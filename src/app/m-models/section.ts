import { PropertyCollection } from './object-instance';
import { PropertyField } from '../m-interfaces/property-field';
import { TypeNamed } from '../m-interfaces/type-named';

export class Section implements TypeNamed {
  typeName = 'Section';
  name: string;
  caption: string;
  objectInstanceId: number;
  private _values: PropertyCollection<PropertyField> = new PropertyCollection<PropertyField>();

  public exists(key: string): boolean {
    if (key !== null && key !== '') {
      return this._values.get(key) !== null;
    }
    return false;
  }
  public getValue(key: string): PropertyField {
    if (key !== null && key !== '') {
      return this._values.get(key);
    }
    return null;
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
