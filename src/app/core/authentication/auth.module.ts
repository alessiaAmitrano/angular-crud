import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from 'core/authentication/components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    CdkTableModule
  ],
  declarations: [LoginComponent, LoginFormComponent]
})
export class AuthModule { }
