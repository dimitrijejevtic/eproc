import { Injectable } from '@angular/core';
import { Step } from '../m-models/step';
import { StepService } from './step.service';
import { ObjectInstanceService } from './object-instance.service';
import { StepValidationService } from './validation.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  previousStep: Step;
  activeStep: Step;
  steps: Step[];
  constructor(private stepService: StepService, private objectInstanceService: ObjectInstanceService
    , private validationService: StepValidationService) {
  }
  setSteps(steps: Step[]) {
    this.steps = steps;
  }

  navigateTo(stepId: number) {

    if (this.activeStep === undefined || this.activeStep === null) {
      this.activeStep = this.steps.find(value => value.Id === stepId);
      return;
    }

    const newStep = this.steps.find(value => value.Id === stepId);
    const oldStep = this.steps.find(value => value.Id === this.activeStep.Id);

    const newStepIndex = this.steps.indexOf(newStep);
    const oldStepIndex = this.steps.indexOf(oldStep);

    this.previousStep = this.activeStep;
    this.activeStep = newStep;

    if (newStepIndex > oldStepIndex) {
      console.log('validating steps with id: ');
      for (let i = oldStepIndex; i < newStepIndex; i++) {
        const instance = this.objectInstanceService.find(this.steps[i].Id);
        if (instance !== null) {
          console.log(this.steps[i].Id);
          this.steps[i].isLoadingValidation = true;
          this.validationService.stepValidated(this.steps[i]);
          this.objectInstanceService.validate(instance.id, instance)
            .subscribe(rules => this.objectInstanceService.applyConditions(instance.id, rules), (error: any) => {
              this.steps[i].isValid = false;
              this.steps[i].isValidated = true;
              this.steps[i].isLoadingValidation = false;
              this.validationService.stepValidated(this.steps[i]);
            });
        }
      }
    } else {
    }
  }
}
