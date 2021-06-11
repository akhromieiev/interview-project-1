import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, take} from 'rxjs/operators';
import { loadTasks } from './store/actions/task.actions';
import { selectTask } from './store/selectors/task.selectors';

@Injectable({ providedIn: 'root' })

export class TaskResolver implements Resolve<boolean> {
  constructor(private store: Store<Task>) { }

  resolve(
  ): Observable<any> | Promise<any> | any {
    this.store.dispatch(loadTasks());
    return this.store.select(selectTask).pipe(
      filter(task => !!task.length),
      take(1)
    );
  }
}