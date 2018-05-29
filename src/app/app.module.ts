import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

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
import { MockupDataService } from './services/mockup-data.service';
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
    DatetimepickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RoutingModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    NgSelectModule,
    DlDateTimePickerDateModule,
    NgxDatatableModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }],
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
