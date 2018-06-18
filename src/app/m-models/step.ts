import { TypeNamed } from '../m-interfaces/type-named';
import { Section } from './section';
import { PropertyField } from '../m-interfaces/property-field';
import { ObjectInstance } from './object-instance';
import { Wizard } from './wizard';
import { AlertMessage } from './alert-message';
import { PropertyRule } from './property-rule';

export class Step implements TypeNamed {
  typeName = 'Step';

  //#region database fields
  Id: number;
  OrderNo: number;
  ExpressionValidation: string;
  ExpressionHide: string;
  DescriptionKey: string;
  EntryEventId: number;
  ExitEventId: number;
  CaptionKey: string;
  WizardId: number;
  Status: number;
  Comment: string;
  Event_EntryEventId: number;
  Event_ExitEventId: number;
  IsNew: boolean;
  IsReadOnly: boolean;
  RelationshipNavigationEnabled: true;
  WizardParent: Wizard;

  // TODO: define type
  WizardStepPostProcessChildren: any[];

  WizardStepSectionChildren: Section[];
  //#endregion

  // objectInstance: ObjectInstance;

  isValid = false;
  isVisible = true;
  isDisabled = false;
  isValidated = false;
  isLoadingValidation = false;
  /**
   * Used for storing validation messages
   */
  validationMessages: AlertMessage[];
  /**
   * Used for navigating between steps
   */
  nextStepId: number;
  previousStepId: number;

  public getValue() {
    const res = new Object(null);
    this.WizardStepSectionChildren.forEach(el => {
      res[el.name] = el.toAssociative();
    });
    return res;
  }

  public getPropertyByName(name: string): PropertyField {
    let field = null;
    this.WizardStepSectionChildren.forEach(sec => {
      const smt = sec.getValue(name);
      if (smt !== null) {
        field = smt;
        return;
      }
    });
    return field;
  }
}

