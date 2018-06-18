import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorPageComponent } from '../home-default/error-page/error-page.component';
import { AlertMessage } from '../m-models/alert-message';
import { ToastrAlertService } from './toastr.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private toastrServ: ToastrAlertService, private router: Router ) { }

  public handleError<T>(url = 'url', result?: T) {
    return (error: any): Observable<T> => {
      // console.log(error);
      if (error.error instanceof ErrorEvent) {
        console.error('An error occured', error.error.message);
      } else {
        console.error(
          `Error status code ${error.status}, ` +
          `body: ${error.error}`
        );
      }
      this.toastrServ.sendAlert(error.error, 'error');
      if (error.status === 500) {
        this.router.navigate(['**']);
      }
      return throwError(
        'There was an error, try again later'
      );
    };
  }
  public handleNonRedirectError<T>(url = 'url', result?: T) {
    return (error: any): Observable<T> => {
      // console.log(error);
      if (error.error instanceof ErrorEvent) {
        console.error('An error occured', error.error.message);
      } else {
        console.error(
          `Error status code ${error.status}, ` +
          `body: ${error.error}`
        );
      }
      this.toastrServ.sendAlert(error.error, 'error');
      if (error.status === 500) {

      }
      return throwError(
        'There was an error, try again later'
      );
    };
  }
}
