import { Injectable } from '@angular/core';
import { Global, Config } from '../utils/config-globals';

@Injectable({
  providedIn: 'root'
})
export class GobalConfigService {
  public readonly configuration: Global;
  constructor() {
    const c = new Config();
    this.configuration = c.Get;
   }
}
