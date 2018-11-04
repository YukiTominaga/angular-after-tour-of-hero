import { Injectable } from '@angular/core';
import { Todo } from '../../models/Todo';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { takeUntil, map, distinctUntilChanged } from 'rxjs/operators';
import { TodoListService } from './todo-list.service';

@Injectable({
  providedIn: 'root'
})
export class TodoListDetailService {
  private _todo$ = new BehaviorSubject<Todo>(new Todo());

  get todo$(): Observable<Todo> {
    return this._todo$.asObservable();
  }

  constructor(private todoListService: TodoListService) { }

  private async fetchTodoDetail(todoId: number): Promise<void> {
    const todo = await this.todoListService.fetchTodoDetail(todoId);
    this._todo$.next(todo);
  }

  // Todoの詳細APIを取得するかどうかを判断するためのURIの変更を監視するServiceを作っても良い
  public subscribeRouteChange(route: ActivatedRoute, untilObservable: Observable<any>) {
    route.params.pipe(
      takeUntil(untilObservable), // untilObservableが発火したらこのObservableをころす
      map(params => params['todoId']),
      distinctUntilChanged(), // 前と同じ値だったら止める
    ).subscribe(todoId => this.fetchTodoDetail(todoId));
  }
}
