import { Component, OnInit, Type, OnDestroy, Input } from '@angular/core';
import { CheckboxInput } from '../../m-models/attributes/checkbox-input';
import { PropertyResolver } from '../../m-resolvers/property-resolver';
import { BuilderComponent } from '../../m-interfaces/builder-component';
import { FormGroup } from '@angular/forms';
import { StepValidationService } from '../../services/validation.service';

@Component({
  selector: 'checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.css']
})
export class CheckboxInputComponent implements OnInit, OnDestroy, BuilderComponent<CheckboxInput> {

  form: FormGroup;
  data: CheckboxInput;
  constructor(private resolver: PropertyResolver<CheckboxInput>, private validationService: StepValidationService) {
 }

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
