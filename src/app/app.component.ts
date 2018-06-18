import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Wizard } from './m-models/wizard';
import { Step } from './m-models/step';
import { StepService } from './services/step.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { WizardService } from './services/wizard.service';
import { NavigationService } from './services/navigation.service';
import { Config, Global } from './utils/config-globals';
import { GobalConfigService } from './services/gobal-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private globConf: GobalConfigService ) {
  }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    console.log('destroying');
  }
}
