import { Injectable } from '@angular/core';
import { AlertMessage } from '../m-models/alert-message';

@Injectable({
  providedIn: 'root'
})
export class ToastrAlertService {

  constructor() { }

  sendAlert(message: string, type: string) {
    const msg = new AlertMessage();
      msg.alertMessage = message;
      msg.alertType = type;
      this.alert(msg);
  }
  alert(message: AlertMessage) {
    switch (message.alertType) {
      case'success': {

        break;
      }
      case'warning': {

        break;
      }
      case'info': {

        break;
      }
      case'error': {

        break;
      }

    }

  }
}
