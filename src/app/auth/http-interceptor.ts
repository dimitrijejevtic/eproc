import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent
  , HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private router: Router) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // TODO: enable interception
    console.log(req.headers.get('No-Auth'));
    if (req.headers.get('No-Auth') === 'True') {
      return next.handle(req.clone());
    }
    if (localStorage.getItem('userToken') != null ) {
      const reqclone = req.clone({
        headers: req.headers.set('Authorization', 'Bearer' + localStorage.getItem('userToken'))
      });
      return next.handle(reqclone).pipe(tap(success => {}, err => {
        if (err.status === 401) {
        // router redirect - user not authorized
        }
      }));
    } else {
      // router redirect - other reason for not authorizing
    }
  }
}
