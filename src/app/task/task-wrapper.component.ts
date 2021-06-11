import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTask } from './store/selectors/task.selectors';

@Component({
  selector: 'app-task-wrapper',
  template: `<div *ngIf="(tasks$ | async) as tasks">
    <app-task [tasks]="tasks"></app-task>
  </div>`
})
export class TaskWrapperComponent {

  tasks$ = this.store.select(selectTask);

  constructor(private store: Store<Task>) { }
}
