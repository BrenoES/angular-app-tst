import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngxs/store';
import { Login } from '@shared/states/auth/auth.actions';
interface ILoginForm {
  username: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm = new FormGroup<ILoginForm>({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  constructor(private store: Store) {}

  get usernameControl() {
    return this.loginForm.get('username');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }

  login(): void {
    let username = this.usernameControl?.value;
    let password = this.passwordControl?.value;
    this.store.dispatch(new Login({ username, password }));
  }
}
