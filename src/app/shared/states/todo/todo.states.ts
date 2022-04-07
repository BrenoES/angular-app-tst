import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Todo } from './todo.actions';
import { tap } from 'rxjs/operators';
import { Todos } from '@modules/todos/todos';
import { TodosService } from '@modules/todos/todos.service';

export interface TodoStateModel {
  todos: Todos;
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    todos: [],
  },
})
@Injectable()
export class TodoState {
  @Selector()
  static allTodos(state: TodoStateModel) {
    return state.todos;
  }

  constructor(private todosService: TodosService) {}

  @Action(Todo.getAll)
  getAll({ getState, setState }: StateContext<TodoStateModel>, action: { id: string }) {
    return this.todosService.getTodosByUser(action.id).pipe(
      tap((todoResult) => {
        const state = getState();
        setState({
          ...state,
          todos: todoResult,
        });
      })
    );
  }
}
