import { Type, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface BuilderComponent<T> {
  data: T;
  form: FormGroup;

}
