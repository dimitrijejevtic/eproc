import { Component, OnInit, OnDestroy } from '@angular/core';
import { Step } from '../m-models/step';
import { StepService } from '../services/step.service';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit, OnDestroy {

  isValid = false;
  isSavable = false;
  step: Observable<Step>;
  constructor(private stepService: StepService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.step = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        console.log(params.get('id'));
        return this.stepService.getStep( +params.get('id'));
      })
    );
  }
  ngOnDestroy(): void {
    this.step = null;
  }
}
