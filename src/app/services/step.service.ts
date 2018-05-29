import { Injectable } from '@angular/core';
import { Step } from '../m-models/step';
import { UrlResolver } from '../m-resolvers/url-resolver';
import { MockupDataService } from './mockup-data.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StepService extends UrlResolver<Step> {

  public stepValid: boolean;
  public steps: Observable<Step[]>;

  constructor(private mockupDataService: MockupDataService) {
    super(Step);
    this.stepValid = false;
  }

  validateStep() {

  }
  saveStep() {

  }
  getStep(id: number): Observable<Step> {
   return this.steps.pipe(
     map(steps => steps.find(step => step.id === id))
   );
  }
  getAllSteps(): Observable<Step[]> {
    this.steps = of(this.mockupDataService.getMockSteps());
    return this.steps;
  }
}
