import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DateTimePickerModule } from 'ngx-datetime-picker';

import { AppComponent } from './app.component';
import { LeftDrawerComponent } from './layout/left-drawer/left-drawer.component';
import { WorkAreaComponent } from './layout/work-area/work-area.component';
import { RoutingModule } from './routing-module/routing-module.module';
import { HomeDefaultComponent } from './home-default/home-default.component';
import { TextInputComponent } from './builder/text-input/text-input.component';
import { RadioButtonComponent } from './builder/radio-button/radio-button.component';
import { CheckboxInputComponent } from './builder/checkbox-input/checkbox-input.component';
import { TextareaInputComponent } from './builder/textarea-input/textarea-input.component';
import { ListInputComponent } from './builder/list-input/list-input.component';
import { PropertyResolver } from './m-resolvers/property-resolver';
import { ModalComponent } from './modal/modal/modal.component';
import { ModalContentComponent } from './modal/modal-content/modal-content.component';
import { ContentTargetDirective } from './modal/content-target.directive';
import { StepComponent } from './step/step.component';
import { StepContentTargetDirective } from './step/step-content-target.directive';
import { FormComponent } from './form/form.component';
import { AlertFormComponent } from './form/alert/alert.component';
import { RequestInterceptor } from './auth/http-interceptor';
import { SectionComponent } from './form/section/section.component';
import { SelectInputComponent } from './builder/select-input/select-input.component';
import { LookupInputComponent } from './builder/lookup-input/lookup-input.component';
import { DatepickerComponent } from './builder/datepicker/datepicker.component';
import { DatetimepickerComponent } from './builder/datetimepicker/datetimepicker.component';
import { ConfigService } from './services/config.service';
import { config } from 'rxjs';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './utils/custom-reuse-strategy';
import { ErrorPageComponent } from './home-default/error-page/error-page.component';
import { StepValidationComponent } from './layout/step-validation/step-validation.component';
import { NavigationService } from './services/navigation.service';
import { StepService } from './services/step.service';
import { WizardService } from './services/wizard.service';
import { ObjectInstanceService } from './services/object-instance.service';
import { FormServiceService } from './services/form-service.service';
import { StepValidationService } from './services/validation.service';

const appInitializeFn = (configurations: ConfigService) => {
  return () => {
    return configurations.getConfiguration();
  };
};
const appDelayInit = (configurations: ConfigService) => {
  return () => {
    return configurations.delayInit();
  };
};

@NgModule({
  declarations: [
    AppComponent,
    LeftDrawerComponent,
    WorkAreaComponent,
    HomeDefaultComponent,
    TextInputComponent,
    RadioButtonComponent,
    CheckboxInputComponent,
    TextareaInputComponent,
    ListInputComponent,
    ModalComponent,
    ModalContentComponent,
    ContentTargetDirective,
    StepComponent,
    StepContentTargetDirective,
    FormComponent,
    AlertFormComponent,
    SectionComponent,
    SelectInputComponent,
    LookupInputComponent,
    DatepickerComponent,
    DatetimepickerComponent,
    ErrorPageComponent,
    StepValidationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RoutingModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    ReactiveFormsModule,
    NgSelectModule,
    NgxDatatableModule,
    DateTimePickerModule
  ],
  // providers: [{ provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appDelayInit,
      multi: true,
      deps: [ConfigService]
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializeFn,
      multi: true,
      deps: [ConfigService]
    },
    {
      provide: RouteReuseStrategy,
       useClass: CustomReuseStrategy
    },
    WizardService,
    StepService,
    NavigationService,
    ObjectInstanceService,
    FormServiceService,
    StepValidationService
  ],
  bootstrap: [AppComponent],
  entryComponents: [TextInputComponent,
     RadioButtonComponent,
     CheckboxInputComponent,
     TextareaInputComponent,
     ListInputComponent,
     SelectInputComponent,
     LookupInputComponent,
     DatepickerComponent,
     DatetimepickerComponent,
     ModalContentComponent]
})
export class AppModule { }
