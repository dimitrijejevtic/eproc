import { Component, OnInit } from '@angular/core';
import { BuilderComponent } from '../../m-interfaces/builder-component';
import { Datepicker } from '../../m-models/attributes/datepicker';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit, BuilderComponent<Datepicker> {

  data: Datepicker;
  form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
