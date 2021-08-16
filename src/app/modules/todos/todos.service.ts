import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todos } from './todos';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private httpClient: HttpClient) {}

  getTodosUser(userId: string) {
    return this.httpClient.get<Todos>('todos', { params: { userId } });
  }

  getAll() {
    return this.httpClient.get('todos');
  }
}
