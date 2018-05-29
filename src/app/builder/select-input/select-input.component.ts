import { Component, OnInit } from '@angular/core';
import { SelectInput } from '../../m-models/attributes/select-input';
import { BuilderComponent } from '../../m-interfaces/builder-component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css']
})
export class SelectInputComponent implements OnInit, BuilderComponent<SelectInput> {

  data: SelectInput;
  form: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  onInputChange(event) {
    this.data.value = this.form.get(this.data.name).value;
  }
}
