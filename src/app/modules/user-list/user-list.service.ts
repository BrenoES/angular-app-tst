import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Users } from './user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUserByID(id: string) {
    return this.httpClient.get<User>(`users/${id}`);
  }

  getAll() {
    return this.httpClient.get<Users>('users');
  }
}
