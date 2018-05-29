import { Component, OnInit, OnDestroy, Output, Input, ViewEncapsulation } from '@angular/core';
import { MockupDataService } from '../services/mockup-data.service';
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

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ObjectInstanceService, MockupDataService]
})
export class FormComponent implements OnInit, OnDestroy {

  @Output() outInstance: EventEmitter<ObjectInstance> = new EventEmitter<ObjectInstance>();
  @Input() listInstance: ObjectInstance;
  @Input() step: Step;

  private instanceId: number;
  public instance: ObjectInstance = new ObjectInstance();
  form: FormGroup;
  saving = false;
  isInner = false;

  public alertMessage: AlertMessage = new AlertMessage();

  constructor(private objectInstanceService: ObjectInstanceService, private mockData: MockupDataService) { }

  ngOnInit() {
    if (this.listInstance !== undefined && this.listInstance !== null) {
      this.instance = this.listInstance;
      this.instanceId = this.listInstance.id;
      this.isInner = true;
      this.step = null;
    } else {
      let objectInstance: ObjectInstance = null;
      if (!environment.production) {
        // const dt = this.mockData.getMockData();
        // objectInstance = this.mockData.getMockObjInstance();
        console.log(this.step);
        objectInstance = this.step.objectInstance;

        this.instanceId = objectInstance.id;
        this.instance = objectInstance;
        console.log('formcomponent ');
        console.log(this.instance);
      } else {
        // TODO: PRODUCTION CODE
      }
    }
    let props = [];
    props = this.instance.getInnerProperties();
    console.log(props);
    const resolr = new PropertyResolver<any>();
    this.form = resolr.toFormGroup(props);

  }
  ngOnDestroy(): void {
  }

  closeAlert($event): void {
  }
  onSubmit(): void {

  }
  /**
   * TODO: gets current instance from instance store service. Needs rework
   */
  getCurrentInstance(): ObjectInstance {

    console.log(this.instanceId);
    const ins = this.objectInstanceService.find(this.instanceId);
    console.log(ins);
    return ins;
  }
  saveInstance() {
    // TODO: run validations
    this.saving = true;
    this.alertMessage = new AlertMessage();
    this.alertMessage.alertType = 'danger';
    this.alertMessage.alertMessage = 'validation failed';
    this.alertMessage.isShown = true;

    this.outInstance.emit(this.instance);
  }

}
