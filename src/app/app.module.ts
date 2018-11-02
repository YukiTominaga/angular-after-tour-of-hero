import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TodoListService } from './services/todo-list/todo-list.service';
import { RestTodoListService } from './services/todo-list/rest-todo-list.service';
import { TodoListComponent } from './components/todo-list/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list/todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: TodoListService, useClass: RestTodoListService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
