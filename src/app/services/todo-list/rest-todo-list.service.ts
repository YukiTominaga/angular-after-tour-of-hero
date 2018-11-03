import { Injectable } from '@angular/core';
import { TodoListService } from './todo-list.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class RestTodoListService extends TodoListService {
  url = 'https://jsonplaceholder.typicode.com/todos';
  private _todoList$ = new BehaviorSubject<Todo[]>([]);

  get todoList$(): Observable<Todo[]> {
    return this._todoList$.asObservable();
  }

  constructor(private http: HttpClient) {
    super();
  }

  public fetchTodoList(): void {
    this.http.get<Todo[]>(this.url).subscribe(
      todoList => this._todoList$.next(todoList)
    );
  }
}
