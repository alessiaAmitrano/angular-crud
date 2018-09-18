import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'core/authentication/models/user';
import { AuthenticationService } from 'core/authentication/services/authentication.service';

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
          this.router.navigate(['games/add']);
        },
        error => {
          console.log(error);
          // this.alertService.error(error);
          this.isloading = false;
        });
  }
}
