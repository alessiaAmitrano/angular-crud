import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from 'core/authentication/components/login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, LoginFormComponent]
})
export class AuthModule { }
