import { TestBed } from '@angular/core/testing';

import { RestTodoListService } from './rest-todo-list.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Todo } from 'src/app/models/Todo';

describe('RestTodoListService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [RestTodoListService],
  }));

  it('クソザコナメクジ', () => {
    const todoList: Todo[] = [
      { id: 1, userId: 1, title: 'title', completed: false }
    ];
    const todoService: RestTodoListService = TestBed.get(RestTodoListService);
    const http = TestBed.get(HttpTestingController);

    todoService.fetchTodoList();
    http.expectOne('https://jsonplaceholder.typicode.com/todos').flush(todoList);
    todoService.todoList$.subscribe(todoList1 => {
      console.log(todoList1);
      expect(todoList1).toBe(todoList);
    });
  });
});
