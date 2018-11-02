import { Injectable } from '@angular/core';
import { Todo } from '../../models/Todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class TodoListService {
  abstract readonly todoList$: Observable<Todo[]>;

  constructor() { }

  public abstract fetchTodoList(): void;
}
