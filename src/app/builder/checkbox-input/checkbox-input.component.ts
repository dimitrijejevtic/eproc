import { Component, OnInit, Type, OnDestroy, Input } from '@angular/core';
import { CheckboxInput } from '../../m-models/attributes/checkbox-input';
import { PropertyResolver } from '../../m-resolvers/property-resolver';
import { BuilderComponent } from '../../m-interfaces/builder-component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.css']
})
export class CheckboxInputComponent implements OnInit, OnDestroy, BuilderComponent<CheckboxInput> {

  form: FormGroup;
  data: CheckboxInput;
  constructor(private resolver: PropertyResolver<CheckboxInput>) { }

  ngOnInit() {
  }
  ngOnDestroy(): void {
  }
  onInputChange(event) {
      this.data.value = this.form.get(this.data.name).value;
  }
}
