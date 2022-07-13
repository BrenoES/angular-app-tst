import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { UserLogin } from '@core/models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private validUsername = 'usuario2020';
  private validPassord = '20202020';
  private token = 'auth.token';
  constructor(private _http: HttpClient) {}

  login(userdetails: UserLogin) {
    if (this.isValidLogin(userdetails)) {
      return of({
        token: this.token,
      });
    } else {
      return of({
        token: '',
      });
    }
  }

  logout(token: string | null) {
    return of({});
  }

  private isValidLogin({ password, username }: UserLogin) {
    return this.validPassord === password && this.validUsername === username;
  }
}
