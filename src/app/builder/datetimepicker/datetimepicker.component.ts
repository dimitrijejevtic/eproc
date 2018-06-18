import { Component, OnInit } from '@angular/core';
import { BuilderComponent } from '../../m-interfaces/builder-component';
import { Datetimepicker } from '../../m-models/attributes/datetimepicker';
import { FormGroup } from '@angular/forms';
import { StepValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-datetimepicker',
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.css']
})
export class DatetimepickerComponent implements OnInit, BuilderComponent<Datetimepicker> {

  data: Datetimepicker;
  form: FormGroup;
  constructor(private validationService: StepValidationService) { }

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
  onInputChange(event) {
   this.data.Value = event;
   this.form.get(this.data.DictionaryAttributeParent.Name).setValue(this.data.Value);
  }
}
