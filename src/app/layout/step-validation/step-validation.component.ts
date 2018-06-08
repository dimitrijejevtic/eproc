import { Component, OnInit, Input } from '@angular/core';
import { StepService } from '../../services/step.service';
import { Step } from '../../m-models/step';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-step-validation',
  templateUrl: './step-validation.component.html',
  styleUrls: ['./step-validation.component.css']
})
export class StepValidationComponent implements OnInit {
  @Input() step: Step;

  constructor(private stepService: StepService) { }

  ngOnInit() {
  }

}
