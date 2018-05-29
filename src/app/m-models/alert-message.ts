export class AlertMessage {
  public alertType: string;
  public alertMessage: string;
  public isShown: boolean;

  constructor() {
    this.alertType = 'info';
    this.alertMessage = 'Info message';
    this.isShown = true;
  }
}
