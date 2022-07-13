import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Todos } from '@modules/todos/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private httpClient: HttpClient) {}

  getTodosByUser(userId: string) {
    return this.httpClient.get<Todos>('todos', { params: { userId } });
  }

  getAll() {
    return this.httpClient.get('todos');
  }
}
