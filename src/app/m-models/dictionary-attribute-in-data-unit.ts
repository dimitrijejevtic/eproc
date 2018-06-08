import { PropertyField } from '../m-interfaces/property-field';
import { DictionaryAttribute } from './dictionary-attribute';

export class DictionaryAttributeInDataUnit {
  DictionaryAttributeId: number;
  DictionaryAttributeParent: DictionaryAttribute;
  DictionaryDataUnitId: number;
  EntityState: number;
  EventParent: any;
  Id: number;
  IsNew: boolean;
  IsReadOnly: boolean;
  NullCheckEnable: boolean;
  OrderNo: number;
  RelationshipNavigationEnabled: boolean;
  Status: number;
  ExpressionReadOnly: boolean;
  ExpressionVisibility: boolean;
  ExpressionValidation: string;
}
