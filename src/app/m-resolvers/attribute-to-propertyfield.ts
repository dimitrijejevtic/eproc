import { DictionaryAttribute } from '../m-models/dictionary-attribute';
import { PropertyField } from '../m-interfaces/property-field';
import { TextInput } from '../m-models/attributes/text-input';
import { TextareaInput } from '../m-models/attributes/textarea-input';
import { SelectInput } from '../m-models/attributes/select-input';
import { RadioButton } from '../m-models/attributes/radio-button';
import { LookupInput } from '../m-models/attributes/lookup-input';
import { CheckboxInput } from '../m-models/attributes/checkbox-input';
import { Datepicker } from '../m-models/attributes/datepicker';
import { Datetimepicker } from '../m-models/attributes/datetimepicker';

export class AttributeToPropertyField {

  public static Resolve(attributes: PropertyField[]): PropertyField[] {
    if (attributes !== undefined && attributes !== null && attributes.length > 0) {
      const properties: PropertyField[] = [];
      attributes.forEach(attribute => {
        switch (attribute.DictionaryAttributeParent.ControlType) {
          case 'singleline': {
            const atr = Object.assign(new TextInput(), attribute);
            properties.push(atr);
            break;
          }
          case 'multiline': {
            const atr = Object.assign(new TextareaInput(), attribute);
           properties.push(atr);
           break;
          }
          case 'combo': case ' combo': {
            const atr = Object.assign(new SelectInput(), attribute);
            properties.push(atr);
            break;
          }
          case 'noyesradio': case 'yesnoradio': {
            const atr = Object.assign(new RadioButton(), attribute);
            properties.push(atr);
            break;
          }
          case 'lookup' : {
            const atr = Object.assign(new LookupInput(), attribute);
            properties.push(atr);
            break;
          }
          case 'check': {
            const atr = Object.assign(new CheckboxInput(), attribute);
            properties.push(atr);
            break;
          }
          case 'datepicker': {
            const atr = Object.assign(new Datepicker(), attribute);
            properties.push(atr);
            break;
          }
          case 'datetimepicker': {
            const atr = Object.assign(new Datetimepicker(), attribute);
            properties.push(atr);
            break;
          }
          case '-' : {
            properties.push(attribute);
            break;
          }
        }
      });
      return properties;
    } else
    return [];
  }
}
