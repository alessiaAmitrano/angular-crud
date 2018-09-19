import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from 'core/authentication/components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { AuthenticationService } from 'core/authentication/services/authentication.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BackendProvider, BackendInterceptor } from 'core/authentication/services/interceptor.service';
import { JwtInterceptor } from 'core/authentication/services/jwt.interceptor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CdkTableModule
  ],
  declarations: [LoginComponent, LoginFormComponent],
  providers: [
    // AuthGuard,
    AuthenticationService,
    // AlertService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    BackendProvider
  ]
})
export class AuthModule { }
