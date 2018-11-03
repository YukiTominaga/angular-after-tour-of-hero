import { Component, OnDestroy, EventEmitter } from '@angular/core';
import { TodoListDetailService } from '../../services/todo-list/todo-list-detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnDestroy {
  todo$ = this.todoDetailService.todo$;

  private onDestroy$ = new EventEmitter(); // EventEmitterはSubjectのサブクラス

  constructor(private route: ActivatedRoute, private todoDetailService: TodoListDetailService) {
    this.todoDetailService.subscribeRouteChange(this.route, this.onDestroy$);
  }

  ngOnDestroy() {
    this.onDestroy$.complete(); // Subjectのcomplete()でObservableを完結させる
  }

}
