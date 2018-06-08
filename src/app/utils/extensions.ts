import { ObjectInstance } from '../m-models/object-instance';
import { Section } from '../m-models/section';
import { PropertyField } from '../m-interfaces/property-field';
import { Step } from '../m-models/step';
import { PropertyRule } from '../m-models/property-rule';
import { ListColumnDisplay } from '../m-models/property-collection';

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
        row[column.name] = field.Value;
      });
      rows.push(row);
    });
    return rows;
  }
  public static getStepProperties(step: Step): PropertyField[] {
    let ar = [];
    step.WizardStepSectionChildren.forEach(el => {
      const ars = Extensions.getSectionProperties(el);
      if (ars !== undefined && ars !== null && ars.length > 0)
        ar = ar.concat(ars);
    });
    return ar;
  }
  public static getSectionProperties(section: Section): PropertyField[] {
    if (section.DictionaryDataUnitParent !== undefined && section.DictionaryDataUnitParent !== null)
      return section.DictionaryDataUnitParent.DicionaryAttributInDataUnitChildren;
  }

  public static applyRule<T>(obj: T, rule: PropertyRule) {

    if (obj instanceof Step) {
      obj.isValid = rule.IsValid;
      obj.isVisible = rule.IsVisible;
      obj.isValidated = true;
    }
    if (obj instanceof Section) {

    }
    if (obj instanceof PropertyField) {
      obj.isValid = rule.IsValid;
      obj.isVisible = rule.IsVisible;
      if (rule.Value !== undefined && rule.Value !== null) {
        obj.Value = rule.Value;
      }
    }
    return obj;
  }
  public static EvaluateValidity(obj: Step): boolean {
    let valid = obj.isValid;
    if (!valid)
      return valid;
    obj.WizardStepSectionChildren.forEach(se => {
      if (se.DictionaryDataUnitParent !== undefined && se.DictionaryDataUnitParent !== null && se.DictionaryDataUnitParent.DicionaryAttributInDataUnitChildren !== undefined
        && se.DictionaryDataUnitParent.DicionaryAttributInDataUnitChildren !== null) {
        se.DictionaryDataUnitParent.DicionaryAttributInDataUnitChildren.forEach(at => {

          valid = valid && at.isValid;
          if (!valid)
            return valid;
        });
      }
    });
    return valid;
  }
}
