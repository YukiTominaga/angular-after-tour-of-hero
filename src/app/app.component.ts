import { Component, OnInit } from '@angular/core';
import { TodoListService } from './services/todo-list/todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todoList$ = this.todoService.todoList$;

  constructor(private todoService: TodoListService) {}

  ngOnInit() {
    this.todoService.fetchTodoList();
  }

}
