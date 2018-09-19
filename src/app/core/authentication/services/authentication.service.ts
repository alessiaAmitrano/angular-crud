import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  public login(userData: any) {
    return this.http.post<any>('/api/authenticate', userData).pipe(
      map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      })
    );
  }

  public logout() {
    localStorage.removeItem('currentUser');
  }

  public get currentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}
