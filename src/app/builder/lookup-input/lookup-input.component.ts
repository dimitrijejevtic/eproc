import { Component, OnInit } from '@angular/core';
import { BuilderComponent } from '../../m-interfaces/builder-component';
import { LookupInput } from '../../m-models/attributes/lookup-input';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { from, of, Subject, concat } from 'rxjs';
import { finalize, delay, debounceTime, distinctUntilChanged, switchMap, catchError, tap, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-lookup-input',
  templateUrl: './lookup-input.component.html',
  styleUrls: ['./lookup-input.component.css'],
  providers: [SearchService]
})
export class LookupInputComponent implements OnInit, BuilderComponent<LookupInput> {

  data: LookupInput;
  form: FormGroup;
  loading = false;
  lookupInput = new Subject<string>();
  dataSourceId: number;
  constructor(private http: HttpClient, private searchService: SearchService) { }

  ngOnInit() {
    this.dataSourceId = this.data.DictionaryAttributeParent.DomainDataSourceId;
    this.data.Options = concat(
      of([]),
      this.lookupInput.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => this.loading = true),
        switchMap(term => this.getWithTerm(term))
      )
    );
  }
  getWithTerm(term: string) {
    return this.searchService.getOptions(this.dataSourceId, term).pipe(
      catchError(() => of([])),
      tap(() => this.loading = false)
    );
  }
  onInputChange(event) {
    this.data.Value = this.form.get(this.data.DictionaryAttributeParent.Name).value;
  }
}
