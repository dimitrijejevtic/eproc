import { Component, OnInit, Input, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Step } from '../../m-models/step';
import { StepService } from '../../services/step.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap, share, map } from 'rxjs/operators';
import { NavigationService } from '../../services/navigation.service';
import { StepValidationService } from '../../services/validation.service';
import { ObjectInstanceService } from '../../services/object-instance.service';
import { ObjectInstance } from '../../m-models/object-instance';

@Component({
  selector: 'left-drawer',
  templateUrl: './left-drawer.component.html',
  styleUrls: ['./left-drawer.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class LeftDrawerComponent implements OnInit, OnDestroy {

  wizardId: string;
  localSteps: Step[];
  constructor(private stepService: StepService, private route: ActivatedRoute
    , private location: Location, private router: Router, private navigationService: NavigationService,
    private validationService: StepValidationService, private objectInstanceService: ObjectInstanceService) { }

  ngOnInit() {
    let id = '';
    id = this.route.snapshot.paramMap.get('id');
    if (id === undefined || id == null || id === '') {
      id = location.href.substring(location.href.lastIndexOf('/') + 1, location.href.length);
    }
    if (id === undefined || id == null || id === '') {
      id = '2';
    }

    this.wizardId = id;
    this.stepService.dynSteps.subscribe(st => { this.localSteps = st; this.initInstances(); this.navigationService.setSteps(st); });
    this.stepService.getAllSteps(this.wizardId).subscribe(s => console.log('loaded drawer') );

    this.router.navigateByUrl('');

  }

  ngOnDestroy(): void {
    console.log('destroying');
  }
  initInstances() {
    this.localSteps.forEach(s => {
      let objectInstance = this.objectInstanceService.find(s.Id);
      if (objectInstance === null) {
        objectInstance = new ObjectInstance();
        objectInstance.initFromStep(s);
        this.objectInstanceService.setById(objectInstance.id, objectInstance);
      }
    });
  }
  navigate(stepId: number) {
    this.navigationService.navigateTo(stepId);
  }

}
