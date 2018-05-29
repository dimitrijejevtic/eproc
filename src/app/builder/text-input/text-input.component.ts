import { Component, OnInit, Type, OnDestroy, Input } from '@angular/core';
import { TextInput } from '../../m-models/attributes/text-input';
import { PropertyResolver } from '../../m-resolvers/property-resolver';
import { BuilderComponent } from '../../m-interfaces/builder-component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit, OnDestroy, BuilderComponent<TextInput> {

  form: FormGroup;
  data: TextInput; // data is now in form.get(), form.getRawValue()
  constructor(private resolver: PropertyResolver<TextInput>) { }

  ngOnInit() {
  }
  ngOnDestroy(): void {
  }
  onInputChange(event) {
    this.data.value = this.form.get(this.data.name).value;
  }
}
