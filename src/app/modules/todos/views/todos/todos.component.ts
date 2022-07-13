import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Todo } from '@shared/states/todo/todo.actions';
import { TodoState } from '@shared/states/todo/todo.states';

import { Todos } from '@modules/todos/interfaces';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  @Select(TodoState.allTodos)
  public todos$!: Observable<Todos>;

  constructor(private store: Store, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const { userId } = this.activatedRoute.snapshot.params;
    this.getTodosByUserStore(userId);
  }

  getTodosByUserStore(userId: string) {
    this.store.dispatch(new Todo.getAll(userId));
  }
}
