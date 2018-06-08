import { Component, OnInit } from '@angular/core';
import { BuilderComponent } from '../../m-interfaces/builder-component';
import { Datetimepicker } from '../../m-models/attributes/datetimepicker';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datetimepicker',
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.css']
})
export class DatetimepickerComponent implements OnInit, BuilderComponent<Datetimepicker> {

  data: Datetimepicker;
  form: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  onInputChange(event) {
   this.data.Value = event;
   this.form.get(this.data.DictionaryAttributeParent.Name).setValue(this.data.Value);
  }
}
