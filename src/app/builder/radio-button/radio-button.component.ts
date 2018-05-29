import { Component, OnInit, Type, OnDestroy, Input } from '@angular/core';
import { PropertyResolver } from '../../m-resolvers/property-resolver';
import { RadioButton } from '../../m-models/attributes/radio-button';
import { BuilderComponent } from '../../m-interfaces/builder-component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit, OnDestroy, BuilderComponent<RadioButton> {

  form: FormGroup;
  data: RadioButton;
  constructor(private resolver: PropertyResolver<RadioButton>) { }

  ngOnInit() {
  }
  ngOnDestroy(): void {
  }
  onInputChange(event) {
    this.data.value = this.form.get(this.data.name).value;
  }
}
