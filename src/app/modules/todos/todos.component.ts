import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Todos } from './todos';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  public todos$!: Observable<Todos>;

  constructor(private todosService: TodosService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const { userId } = this.activatedRoute.snapshot.params;
    this.gettodosUser(userId);
  }

  gettodosUser(userID: string) {
    this.todos$ = this.todosService.getTodosUser(userID);
  }
}
