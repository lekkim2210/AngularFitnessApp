import { Injectable } from '../../../node_modules/@angular/core';
import { Http, Response } from '../../../node_modules/@angular/http';
import { Observable } from '../../../node_modules/rxjs/';

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
    .map((response: Response) => {
      // login successful if there's a jwt token in the response
      const user = response.json();
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('jwt-token', user.token);
      }
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
