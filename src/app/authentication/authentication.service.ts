import { Injectable } from '@angular/core';
import { Http, Response } from '../../../node_modules/@angular/http';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class AuthenticationService {

  private baseUrl = 'someurl.com/something';

  constructor(private http: Http) { }

  RegisterUser(name: string, email: string, password: string): Observable<void> {
    return this.http.post(`${this.baseUrl}/register`, {
      name: name,
      email: email,
      password: password
    })
    .map((response, Response) => {
      const user = response.json(); //mangler noget save to local her. Måske laves anerledes. 
    });
  }

  private saveToken(token: string) {
    window.localStorage['jwt-token'] = token;
  }

  private getToken(token: string) {
    if (window.localStorage['jwt-token']) {
      return window.localStorage['jwt-token'];
    } else {
      return '';
    }
  }
}
