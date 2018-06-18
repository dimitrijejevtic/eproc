import { Injectable } from '@angular/core';
import { Constants } from '../utils/constants';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {

  private configurations;
  constructor(private http: HttpClient) { }

  delayInit(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`delaying`);
        resolve();
      }, 1000);
    });
  }
  getConfiguration() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`config`);
        resolve();
      }, 10);
    });
    // return this.http.get(Constants.rootUrl + Constants.apiUrl + 'configuiration')
    //   .toPromise()
    //   .then(data => {
    //     this.configurations = data; })
    //   .catch(_ => console.log('server unavailable'));

  }
  public getConfig() {
    return this.configurations;
  }
}
