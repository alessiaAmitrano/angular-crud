import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'core/authentication/models/user';
import { AuthenticationService } from 'core/authentication/services/authentication.service';
import { Store } from '@ngxs/store';
import { Login } from 'core/store/authentication.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public user: any = {};
  public isloading = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private store: Store
    // private alertService: AlertService
    ) { }

  public ngOnInit() {
    this.authenticationService.logout();
  }

  public loginHandler(event): void {
    this.isloading = event[0];
    this.user = event[1];
    this.authenticationService
      .login(this.user.username, this.user.password)
      .subscribe(
        data => {
          const client: User = data;
          this.store.dispatch(new Login(client));
          this.router.navigate(['games/add']);
        },
        error => {
          console.log(error);
          // this.alertService.error(error);
          this.isloading = false;
        });
  }
}
