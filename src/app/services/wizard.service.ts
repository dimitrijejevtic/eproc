import { Injectable } from '@angular/core';
import { UrlResolver } from '../m-resolvers/url-resolver';
import { Wizard } from '../m-models/wizard';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Constants } from '../utils/constants';
import { Observable, of } from 'rxjs';
import { catchError, share, publishReplay } from 'rxjs/operators';
import { ErrorService } from './error.service';
import { Step } from '../m-models/step';
import { ObjectInstance } from '../m-models/object-instance';
import { ObjectInstanceService } from './object-instance.service';

@Injectable({
  providedIn: 'root'
})
export class WizardService extends UrlResolver<Wizard> {

  wizard: Wizard;

  constructor(private http: HttpClient, private errorService: ErrorService
    , private objectInstanceService: ObjectInstanceService) {
    super(Wizard);

  }

  getWizardSteps(tag: string): Observable<Step[]> {
    const options = { params: new HttpParams().set('Tag', tag) };
    const url = this.getQueryUrl('GetAllWizardStepsAndSectionsAndAttributes');
    console.log(url);
    return this.http.get<Step[]>(url, options)
     .pipe(catchError(this.errorService.handleError(url)));
  }
  setWizard(wizard: Wizard) {
    this.wizard = wizard;
    this.wizard.objectInstance = new ObjectInstance();
    this.objectInstanceService.setById(this.wizard.objectInstance.id, this.wizard.objectInstance);
  }
}
