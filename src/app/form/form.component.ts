import { Component, OnInit, OnDestroy, Output, Input, ViewEncapsulation } from '@angular/core';
import { BuilderComponent } from '../m-interfaces/builder-component';
import { environment } from '../../environments/environment';
import { AlertMessage } from '../m-models/alert-message';
import { ObjectInstanceService } from '../services/object-instance.service';
import { ObjectInstance } from '../m-models/object-instance';
import { FormGroup } from '@angular/forms';
import { PropertyField } from '../m-interfaces/property-field';
import { PropertyResolver } from '../m-resolvers/property-resolver';
import { EventEmitter } from '@angular/core';
import { Step } from '../m-models/step';
import { StepService } from '../services/step.service';
import { Observable } from 'rxjs';
import { Section } from '../m-models/section';
import { Extensions } from '../utils/extensions';
import { FormServiceService } from '../services/form-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ObjectInstanceService],
  encapsulation: ViewEncapsulation.Emulated
})
export class FormComponent implements OnInit, OnDestroy {

  @Output() outInstance: EventEmitter<ObjectInstance> = new EventEmitter<ObjectInstance>();
  @Input() listInstance: ObjectInstance;
  @Input() step: Step;

  private instanceId: string;
  public instance: ObjectInstance;
  form: FormGroup;
  saving = false;
  isInner = false;

  public alertMessage: AlertMessage = new AlertMessage();

  constructor(private objectInstanceService: ObjectInstanceService, private stepService: StepService,
    private formService: FormServiceService) { }

  ngOnInit() {

    if (this.listInstance !== undefined && this.listInstance !== null) {
      this.instance = this.listInstance;
      this.instanceId = this.listInstance.guid;
      this.isInner = true;
      this.step = null;
    } else {
      let objectInstance: ObjectInstance = null;
      objectInstance = this.objectInstanceService.find(this.step.Id);

      this.instance = objectInstance;

    }

    this.formService.activeForm.subscribe(f => this.form = f);

  }


  ngOnDestroy(): void {
    this.form = null;
  }

  closeAlert($event): void {
  }
  onSubmit(): void {

  }
  /**
   * TODO: gets current instance from instance store service. Needs rework
   */
  getCurrentInstance(): ObjectInstance {
    const ins = this.objectInstanceService.find(this.instance.id);
    return ins;
  }
  saveInstance() {
    // TODO: run validations
    this.saving = true;
    this.alertMessage = new AlertMessage();
    this.alertMessage.alertType = 'error';
    this.alertMessage.alertMessage = 'validation failed';
    this.alertMessage.isShown = true;

    this.outInstance.emit(this.instance);
  }

}
