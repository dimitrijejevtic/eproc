import { Component, OnInit, Type, OnDestroy, Input } from '@angular/core';
import { BuilderComponent } from '../../m-interfaces/builder-component';
import { TextareaInput } from '../../m-models/attributes/textarea-input';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'textarea-input',
  templateUrl: './textarea-input.component.html',
  styleUrls: ['./textarea-input.component.css']
})
export class TextareaInputComponent implements OnInit, OnDestroy, BuilderComponent<TextareaInput> {

  form: FormGroup;
  data: TextareaInput;
  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy(): void {
  }
  onInputChange(event) {
    this.data.Value = this.form.get(this.data.DictionaryAttributeParent.Name).value;
  }
}
