
import { PropertyField } from '../m-interfaces/property-field';
import { TypeNamed } from '../m-interfaces/type-named';
import { DictionaryDataUnit } from './dictionary-data-unit';
import { PropertyRule } from './property-rule';
import { PropertyCollection } from './property-collection';

export class Section implements TypeNamed {
  typeName = 'Section';

  //#region database fields
  Id: number;
  WizardStepId: number;
  DictionaryDataUnitId: number;
  OrderNo: number;
  CaptionKey: string;
  ControlName: string;
  ExpressionVisible: boolean;
  ExpressionReadOnly: boolean;
  SubWizardNewId: number;
  ExpressionNewEnabled: string;
  SubWizardEditId: number;
  ExpressionEditEnabled: string;
  SubWizardViewId: number;
  ExpressionViewEnabled: string;
  SubWizardDeleteId: number;
  ExpressionDeleteEnabled: string;
  Comment: string;
  Status: number;
  DictionaryDataUnitParent: DictionaryDataUnit;
  EntityState: number;
  IsNew: boolean;
  IsReadOnly: boolean;
  RelationshipNavigationEnabled: boolean;
  Wizard_SubWizardDeleteId: number;
  Wizard_SubWizardEditId: number;
  Wizard_SubWizardNewId: number;
  Wizard_SubWizardViewId: number;
  //#endregion

  name: string;
  caption: string;

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
