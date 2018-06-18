import { Component, OnInit, Type, OnDestroy, Input } from '@angular/core';
import { PropertyResolver } from '../../m-resolvers/property-resolver';
import { RadioButton } from '../../m-models/attributes/radio-button';
import { BuilderComponent } from '../../m-interfaces/builder-component';
import { FormGroup } from '@angular/forms';
import { StepValidationService } from '../../services/validation.service';

@Component({
  selector: 'radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit, OnDestroy, BuilderComponent<RadioButton> {

  form: FormGroup;
  data: RadioButton;
  constructor(private resolver: PropertyResolver<RadioButton>, private validationService: StepValidationService ) { }

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
