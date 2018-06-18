import { Injectable } from '@angular/core';
import { Step } from '../m-models/step';
import { UrlResolver } from '../m-resolvers/url-resolver';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, share, catchError } from 'rxjs/operators';
import { WizardService } from './wizard.service';
import { StepValidationService } from './validation.service';
import { PropertyRule, TargetType } from '../m-models/property-rule';
import { Extensions } from '../utils/extensions';
import { Section } from '../m-models/section';
import { PropertyField } from '../m-interfaces/property-field';

@Injectable({
  providedIn: 'root'
})
export class StepService extends UrlResolver<Step> {

  public stepValid: boolean;
  public steps: Observable<Step[]>;
  public rawSteps: Step[] = [];
  public dynSteps: BehaviorSubject<Step[]>;

  constructor(private wizardService: WizardService, private validationService: StepValidationService) {
    super(Step);
    this.dynSteps = new BehaviorSubject([]);
    this.validationService.validatingStep.subscribe(s => this.updateStep(s));

  }

  stepsChanged() {
    this.dynSteps.next(this.rawSteps);
  }
  validateStep() {

  }
  saveStep() {

  }
  getStep(id: number): Observable<Step> {
    return this.dynSteps.pipe(
      map(steps => this.rawSteps.find(step => step.Id === id))
    );
  }
  getAllSteps(tag: string) {
    if (tag === undefined || tag === null)
      return of(null);
    return this.wizardService.getWizardSteps(tag)
      .pipe(
        map((steps: Step[]) => this.bindSteps(steps)),
        steps => this.steps = steps
      );
      // .subscribe(st => this.rawSteps = st);
  }

  private bindSteps(steps: Step[]) {
    for (let i = 0; i < steps.length; i++) {
      // creating fields in observable
      steps[i].isValid = true;
      steps[i].isVisible = true;
      steps[i].isDisabled = false;
      steps[i].isValidated = false;
      steps[i].isLoadingValidation = false;

      if (i === 0) {
        steps[i].previousStepId = undefined;
        if (steps.length > 1) {
          steps[i].nextStepId = steps[i + 1].Id;
        }
      } else if (i > 0 && i < steps.length - 1) {
        steps[i].nextStepId = steps[i + 1].Id;
        steps[i].previousStepId = steps[i - 1].Id;
      } else {
        steps[i].nextStepId = undefined;
        steps[i].previousStepId = steps[i - 1].Id;
      }
      if (steps[i].WizardStepSectionChildren !== undefined && steps[i].WizardStepSectionChildren !== null) {
        steps[i].WizardStepSectionChildren.forEach(val => {
          if (val.DictionaryDataUnitParent !== undefined && val.DictionaryDataUnitParent !== null) {
            val.DictionaryDataUnitParent.DicionaryAttributInDataUnitChildren.forEach(pr => {
              pr.Value = '';
              pr.isValid = undefined;
              pr.isVisible = true;
            });
          }
        });
      }
    }
    this.rawSteps = steps;
    this.stepsChanged();
    return steps;
  }
  updateStep(step: Step) {
    if (this.rawSteps === undefined) return;
    const ex = this.rawSteps.find(v => v.Id === step.Id);

    if (ex !== null && ex !== undefined) {

      ex.isLoadingValidation = step.isLoadingValidation;
      ex.isValid = step.isValid;
      ex.isValidated = step.isValidated;
      ex.isVisible = step.isVisible;
      ex.isDisabled = step.isDisabled;
      this.stepsChanged();
    }
  }

  applyRules(rules: PropertyRule[]) {

    // step parts
    const stepRules = rules.filter(val => val.TargetType === TargetType.Step);

    // section parts
    const sectionRules = rules.filter(val => val.TargetType === TargetType.Section);

    // attribute parts
    const attrRules = rules.filter(val => val.TargetType === TargetType.Attribute);


    for (let i = 0; i < stepRules.length; i++) {
       let st = this.rawSteps.find(s => s.Id === stepRules[i].Id);

       st = Object.assign(new Step(), st);
       st = Extensions.applyRule(st, stepRules[i]);


       this.validationService.stepValidated(st);

    }

    for (let i = 0; i < sectionRules.length; i++) {
      const rule = sectionRules[i];
      for (let j = 0; j < this.rawSteps.length; j++) {
       let sec = this.rawSteps[j].WizardStepSectionChildren.find(se => se.Id === rule.Id);
        if (sec !== undefined && sec !== null) {
          sec = Object.assign(new Section(), sec);
          sec = Extensions.applyRule(sec, sectionRules[i]);

          this.rawSteps[j].isValid = Extensions.EvaluateValidity(this.rawSteps[j]);

          this.validationService.stepValidated(this.rawSteps[j]);
        }
      }
    }

    for (let i = 0; i < attrRules.length; i++) {
      for (let j = 0; j < this.rawSteps.length; j++) {
        for (let x = 0; x < this.rawSteps[j].WizardStepSectionChildren.length; x++) {
          let at = this.rawSteps[j].WizardStepSectionChildren[x].DictionaryDataUnitParent.DicionaryAttributInDataUnitChildren.find(a => a.DictionaryAttributeParent.Id === attrRules[i].Id);

          if (at !== undefined && at !== null) {

            at = Object.assign(new PropertyField(), at);
            at = Extensions.applyRule(at, attrRules[i]);

            this.rawSteps[j].isValid = Extensions.EvaluateValidity(this.rawSteps[j]);

            this.validationService.stepValidated(this.rawSteps[j]);
            this.validationService.attrValidated(at);
          }
        }
      }
    }

  }

}
