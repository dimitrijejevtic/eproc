import { Component, OnInit } from '@angular/core';
import { BuilderComponent } from '../../m-interfaces/builder-component';
import { Datepicker } from '../../m-models/attributes/datepicker';
import { FormGroup } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { StepValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit, BuilderComponent<Datepicker> {

  config: Partial<BsDatepickerConfig>;
  data: Datepicker;
  form: FormGroup;
  constructor(private validationService: StepValidationService) {
    this.config = Object.assign({}, {containerClass: 'theme-dark-blue'});

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

}
