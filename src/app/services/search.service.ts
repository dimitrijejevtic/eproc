import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Constants } from '../utils/constants';
import { of } from 'rxjs';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  getOptions(domainDataSourceId: number, term?: string) {
    if (domainDataSourceId === null)
      return of([]);
    let options = {};
    if (term !== undefined && term !== null && term !== '' )
      options = { params: new HttpParams().set('SearchTerm', '' + term) };
    return this.http.get<any[]>(''.concat(Constants.rootUrl, Constants.apiUrl, 'search/', '' + domainDataSourceId), options);
  }

}
