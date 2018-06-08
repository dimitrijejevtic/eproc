import { DictionaryAttributeInDataUnit } from './dictionary-attribute-in-data-unit';
import { PropertyField } from '../m-interfaces/property-field';

export class DictionaryDataUnit {
  Cardinality: string;
  Commet: string;
  EntityState: number;
  Id: number;
  IsNew: boolean;
  IsReadOnly: boolean;
  Name: string;
  NullCheckEnabled: boolean;
  ObjectMetaId: number;
  ObjectMetaRelationshipId: number;
  ObjectMetaRelationshipParent: any;
  RelationshipNavigationEnabled: boolean;
  Status: number;
  DicionaryAttributInDataUnitChildren: PropertyField[];
}
