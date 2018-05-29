import { Component, OnInit } from '@angular/core';
import { BuilderComponent } from '../../m-interfaces/builder-component';
import { LookupInput } from '../../m-models/attributes/lookup-input';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { from, of } from 'rxjs';
import { finalize, delay } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-lookup-input',
  templateUrl: './lookup-input.component.html',
  styleUrls: ['./lookup-input.component.css']
})
export class LookupInputComponent implements OnInit, BuilderComponent<LookupInput> {

  options = [{ 'id': 1, 'name': 'opt1' },
  { 'id': 3, 'name': 'opt2' },
  { 'id': 2, 'name': 'opt5' }];
  data: LookupInput;
  form: FormGroup;
  loading = true;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    if (!environment.production) {
      const s = of(this.options);
      this.data.options = s.pipe(delay(6000), finalize(() => { this.loading = false; }));
    }
  }
  onInputChange(event) {
    this.data.value = this.form.get(this.data.name).value;
  }
}
