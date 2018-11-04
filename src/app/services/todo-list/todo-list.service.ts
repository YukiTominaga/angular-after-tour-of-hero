import { Injectable } from '@angular/core';
import { Todo } from '../../models/Todo';

@Injectable({
  providedIn: 'root'
})
export abstract class TodoListService {
  constructor() { }

  public abstract fetchTodoList(): Promise<Todo[]>;

  public abstract fetchTodoDetail(todoId: number): Promise<Todo>;
}
