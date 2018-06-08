import { Component, OnInit, Type, OnDestroy, Input } from '@angular/core';
import { TextInput } from '../../m-models/attributes/text-input';
import { PropertyResolver } from '../../m-resolvers/property-resolver';
import { BuilderComponent } from '../../m-interfaces/builder-component';
import { FormGroup } from '@angular/forms';
import { StepValidationService } from '../../services/validation.service';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit, OnDestroy, BuilderComponent<TextInput> {

  form: FormGroup;
  data: TextInput; // data is now in form.get(), form.getRawValue()
  constructor(private resolver: PropertyResolver<TextInput>, private validationService: StepValidationService) { }

  ngOnInit() {
    this.validationService.validatingAttribute.subscribe(at => {
      if (this.data.DictionaryAttributeId === at.DictionaryAttributeId) {
        this.data.isValid = at.isValid;
        this.data.isVisible = at.isVisible;
        this.data.IsReadOnly = at.IsReadOnly;
        if (at.IsReadOnly)
          this.form.get(this.data.DictionaryAttributeParent.Name).disable();
        if (!this.data.isValid)
          this.form.get(this.data.DictionaryAttributeParent.Name).setErrors({'incorrect': true});

        this.form.get(this.data.DictionaryAttributeParent.Name).markAsTouched();
        this.form.get(this.data.DictionaryAttributeParent.Name).markAsDirty();
      }
    });
  }
  ngOnDestroy(): void {

  }
  onInputChange(event) {
    this.data.Value = this.form.get(this.data.DictionaryAttributeParent.Name).value;
  }
}
