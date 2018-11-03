import { Component, OnInit } from '@angular/core';
import { TodoListAllService } from './services/todo-list/todo-list-all.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todoList$ = this.todoService.todoList$.pipe(
    map(todoList => todoList.filter(todo => todo.userId === 1)), // 件数が多かったのでフィルタしました
  );

  constructor(private todoService: TodoListAllService) {}

  ngOnInit() {
    this.todoService.fetchAllTodoList();
  }

}
