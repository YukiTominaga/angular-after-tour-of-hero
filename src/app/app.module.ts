// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Services
import { TodoListService } from './services/todo-list/todo-list.service';
import { RestTodoListService } from './services/todo-list/rest-todo-list.service';

// Components
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list/todo-list-item/todo-list-item.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoDetailComponent,
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
