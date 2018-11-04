import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../../models/Todo';
import { TodoListService } from './todo-list.service';

@Injectable({
  providedIn: 'root'
})
export class TodoListAllService {
  private _todoList$ = new BehaviorSubject<Todo[]>([]);

  get todoList$(): Observable<Todo[]> {
    return this._todoList$.asObservable();
  }

  constructor(private todoListService: TodoListService) { }

  public async fetchAllTodoList() {
    const allTodoList = await this.todoListService.fetchTodoList();
    this._todoList$.next(allTodoList);
  }
}
