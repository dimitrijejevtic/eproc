import { PropertyField } from '../m-interfaces/property-field';
import { TypeNamed } from '../m-interfaces/type-named';
import { Guid } from '../utils/guid';
import { Step } from './step';
import { Extensions } from '../utils/extensions';
import { PropertyCollection } from './property-collection';

// TODO simplify classes
export class ObjectInstance implements TypeNamed {

  name: string;
  typeName = 'ObjectInstance';
  id: number;
  private _values: PropertyCollection<PropertyField> = new PropertyCollection<PropertyField>();

  private _guid: string;
  public get guid(): string {
    return this._guid;
  }

  constructor() {
    this._guid = Guid.newGuid();
  }

  initFromStep(step: Step) {
    this.name = step.CaptionKey;
    this.id = step.Id;
    const props = Extensions.getStepProperties(step);
    props.forEach(prop => {
      this.setPropertyValue(prop.DictionaryAttributeParent.Name, {});
    });
  }

  public getPropertyByName(name: string): PropertyField {
    if (this.exists(name))
      return this._values.get(name);
    else return null;
  }
  public exists(key: string): boolean {
    if (key !== null && key !== '') {
      return this._values.get(key) !== null;
    }
    return false;
  }

  public setPropertyValue(key: string, value: any): void {
    this._values.set(key, value);
  }

  public removeProperty(key: string) {
    if (this.exists(key))
      this._values.deletePair(key);
  }
  public getValues(): Map<string, PropertyField> {
    if (this._values !== null)
      return this._values.getValue();
    return null;
  }
  public get length(): number {
    return this._values.length;
  }
  public toAssociative() {
    const json = Object.create(null);
    json['Id'] = this.id;
    json['Guid'] = this.guid;
    json['TypeName'] = this.typeName;
    json['Name'] = this.name;
    json['ObjectId'] = this.id;
    json['Tag'] = 1; // u pitanju je validacija, a ne provera ReadOnly, Mandatory i Visible
    json['Fields'] = [];
    this._values.getValue().forEach((value, key) => {
      json['Fields'].push({'Name': key, 'Value': value.Value, 'DataType': 'Attribute' });
    });
  return json;
  }

}


