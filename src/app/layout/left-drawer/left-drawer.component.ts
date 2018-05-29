import { Component, OnInit } from '@angular/core';
import { Step } from '../../m-models/step';
import { StepService } from '../../services/step.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'left-drawer',
  templateUrl: './left-drawer.component.html',
  styleUrls: ['./left-drawer.component.css']
})
export class LeftDrawerComponent implements OnInit {

  steps: Observable<Step[]>;
  constructor(private stepService: StepService) { }

  ngOnInit() {
    this.steps = this.stepService.getAllSteps();
  }

}
