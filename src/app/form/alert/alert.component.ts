import { Component, OnInit, Input } from '@angular/core';
import { AlertMessage } from '../../m-models/alert-message';

@Component({
  selector: 'app-form-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']

})
export class AlertFormComponent implements OnInit {

  @Input() alertMessage: AlertMessage;
  constructor() { }

  ngOnInit() {
  }

}
