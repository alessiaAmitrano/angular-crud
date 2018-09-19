import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';


@Injectable()
export class BackendInterceptor {

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // array in local storage for registered users
    const users: any[] = USERS || [];

    // wrap in delayed observable to simulate server api call
    return of(null).pipe(
      mergeMap(() => {
        // authenticate
        if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {
          // find if any user matches login credentials
          const filteredUsers = users.filter(user => {
            return user.username === request.body.username && user.password === request.body.password;
          });

          if (filteredUsers.length) {
            const user = filteredUsers[0];
            const body = {
              username: user.username,
              token: 'fake-jwt-token'
            };

            return of(new HttpResponse({ status: 200, body }));
          } else {
            // else return 400 bad request
            return _throw('Username or password is incorrect');
          }
        }

        return next.handle(request);
      }),
      materialize(),
      delay(500),
      dematerialize()
    );
  }
}

export let BackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: BackendInterceptor,
  multi: true
};

const USERS = [
  {
    username: 'holition',
    password: '341200',
  }
];
