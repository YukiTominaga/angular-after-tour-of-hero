import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoListService } from './todo-list.service';
import { Todo } from '../../models/Todo';

const getTodoUrl = 'https://jsonplaceholder.typicode.com/todos';

@Injectable({
  providedIn: 'root'
})
export class RestTodoListService extends TodoListService {

  constructor(private http: HttpClient) {
    super();
  }

  public fetchTodoList(): Promise<Todo[]> {
    return this.http.get<Todo[]>(getTodoUrl).toPromise();
  }

  public fetchTodoDetail(todoId: number): Promise<Todo> {
    return this.http.get<Todo>(`${getTodoUrl}/${todoId}`).toPromise();
  }
}
