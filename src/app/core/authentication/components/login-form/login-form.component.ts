import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @Input() public model;
  @Input() public isloading;
  @Output() public loginEvent: EventEmitter<any> = new EventEmitter<any>();

  public login() {
    this.isloading = true;
    this.loginEvent.emit([this.isloading, this.model]);
  }
}
