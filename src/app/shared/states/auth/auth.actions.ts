export interface AuthStateModel {
  token: string | null;
  username: string | null;
}

export class Login {
  static readonly type = '[Auth] Login';
  constructor(
    public payload: {
      password: string;
      username: string;
    }
  ) {}
}

export class Logout {
  static readonly type = '[Auth] Logout';
}
