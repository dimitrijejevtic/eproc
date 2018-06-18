import { Component, OnInit } from '@angular/core';
import { SelectInput } from '../../m-models/attributes/select-input';
import { BuilderComponent } from '../../m-interfaces/builder-component';
import { FormGroup } from '@angular/forms';
import { finalize, catchError } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';
import { of } from 'rxjs';
import { StepValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css'],
  providers: [SearchService]
})
export class SelectInputComponent implements OnInit, BuilderComponent<SelectInput> {

  data: SelectInput;
  form: FormGroup;
  loading = true;
  constructor(private searchServive: SearchService, private validationService: StepValidationService) { }

  ngOnInit() {
    this.data.Options = this.searchServive.getOptions(this.data.DictionaryAttributeParent.DomainDataSourceId)
      .pipe(finalize(() => this.loading = false));
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
    this.data.Value = this.form.get(this.data.DictionaryAttributeParent.Name).value;
  }
}
