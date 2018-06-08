import { Component, OnInit } from '@angular/core';
import { SelectInput } from '../../m-models/attributes/select-input';
import { BuilderComponent } from '../../m-interfaces/builder-component';
import { FormGroup } from '@angular/forms';
import { finalize, catchError } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';
import { of } from 'rxjs';

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
  constructor(private searchServive: SearchService) { }

  ngOnInit() {
    this.data.Options = this.searchServive.getOptions(this.data.DictionaryAttributeParent.DomainDataSourceId)
      .pipe(finalize(() => this.loading = false));
  }
  onInputChange(event) {
    this.data.Value = this.form.get(this.data.DictionaryAttributeParent.Name).value;
  }
}
