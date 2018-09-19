import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthenticationService) { }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const routeId = next.paramMap.get('clientId');
    const currentUser: User = this.auth.currentUser;
    if (currentUser) {
      return true;
    }
    console.log('Unauthorized to open link: ' + state.url);
    this.router.navigate(['/login']);
    return false;

  }
}
