import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../m-models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public authenticate(username, password) {
    const data = 'username=' + username + '&password=' + password + '&grant_type=password';

    const requestHeader = new HttpHeaders({'Content-Type': 'application/x-www-url-encoded', 'No-Auth': 'True'});
    return this.http.post('http://token', data, {headers : requestHeader} );
  }
  public logout() {
    localStorage.removeItem('userToken');
  }
  getClaim(): Observable<User> {
    return this.http.get<User>('http://api/WebApi/GetClaims');
  }

}
