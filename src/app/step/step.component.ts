import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Step } from '../m-models/step';
import { StepService } from '../services/step.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { PropertyField } from '../m-interfaces/property-field';
import { Extensions } from '../utils/extensions';
import { PropertyResolver } from '../m-resolvers/property-resolver';
import { FormGroup } from '@angular/forms';
import { FormServiceService } from '../services/form-service.service';
import { ObjectInstanceService } from '../services/object-instance.service';
import { ObjectInstance } from '../m-models/object-instance';
import { PropertyRule, TargetType } from '../m-models/property-rule';
import { NavigationService } from '../services/navigation.service';
import { StepValidationService } from '../services/validation.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StepComponent implements OnInit, OnDestroy {

  isValid = false;
  isSavable = false;
  step: Observable<Step>;
  localStep: Step;
  form: FormGroup;
  instance: ObjectInstance;
  private swap = true;

  constructor(private stepService: StepService, private route: ActivatedRoute, private location: Location, private formService: FormServiceService,
    private objectInstanceService: ObjectInstanceService, private navigationService: NavigationService,
    private router: Router, private validationService: StepValidationService) { }

  ngOnInit() {
    this.step = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.stepService.getStep(+params.get('id'));
      })
    );
    this.step.subscribe(s => {
      if (this.localStep !== undefined && this.localStep !== null && this.localStep.Id === s.Id)
        this.swap = false;
      else {
        this.swap = true;
      }
      this.localStep = s;
      let objectInstance = this.objectInstanceService.find(s.Id);
      if (objectInstance === null) {
        objectInstance = new ObjectInstance();
        objectInstance.initFromStep(s);
        this.objectInstanceService.setById(objectInstance.id, objectInstance);
      }
      this.instance = objectInstance;

      if (this.swap)
        this.formService.changeForm(s, this.instance);

    });
    this.formService.activeForm.subscribe(f => this.form = f);

  }
  ngOnDestroy(): void {
    this.step = null;
    this.localStep = null;
  }


  validate() {

    this.localStep.isLoadingValidation = true;
    this.mergeValues(this.form);
    this.validationService.stepValidated(this.localStep);

    this.objectInstanceService.validate(this.instance.id, this.instance)
      .subscribe(rules => this.applyConditions(rules), (error: any) => {
        this.localStep.isValid = false;
        this.localStep.isValidated = true;
        this.localStep.isLoadingValidation = false;
        this.validationService.stepValidated(this.localStep);
      });

  }

  applyConditions(rules: PropertyRule[]) {
    // TODO: apply conditions to steps, sections, properties ...
    this.stepService.applyRules(rules);
    if (rules.length === 0) {
      this.isSavable = true;
    }
  }
  testApplycConditions() {
    const rules = [];
    const r1 = new PropertyRule();
    r1.Id = 3;
    r1.IsValid = false;
    r1.IsVisible = true;
    r1.TargetType = TargetType.Step;
    rules.push(r1);

    const r2 = new PropertyRule();
    r2.Id = 70;
    r2.IsValid = false;
    r2.IsVisible = true;
    r2.IsReadOnly = true;
    r2.TargetType = TargetType.Attribute;

    rules.push(r2);
    this.applyConditions(rules);
  }

  saveStep() {
    this.mergeValues(this.form);
  }
  mergeValues(form: FormGroup) {
    const instancevals = this.instance.getValues();
    instancevals.forEach((value: any, key: string) => {
      value.Value = form.get(key).value;
    });

    // this.objectInstanceService.saveById(this.instance.id); not in this method
  }
  navigatePrevious() {
    this.mergeValues(this.form);
    this.navigationService.navigateTo(this.localStep.previousStepId);
    this.router.navigate(['/step', this.localStep.previousStepId]);
  }
  navigateNext() {
    this.mergeValues(this.form);
    this.navigationService.navigateTo(this.localStep.nextStepId);
    this.router.navigate(['/step', this.localStep.nextStepId]);
  }
}
