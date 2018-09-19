import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Input() public isloading;
  @Output() loginEvent = new EventEmitter();
  userForm: FormGroup;
  userItem = {
    user: '',
    password: ''
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
      this.userForm = this.formBuilder.group(this.userItem);
  }

  onLoginBtnClick(event: Event) {
    event.preventDefault();
    this.isloading = true;
    this.loginEvent.emit([this.isloading, this.userForm.value]);
    console.log('form', this.userForm.value);
  }
}
