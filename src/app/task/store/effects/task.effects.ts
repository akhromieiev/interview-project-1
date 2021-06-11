import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as TaskActions from '../actions/task.actions';
import { TASK_MOCK_DATA } from '../mocks/task.mock';

@Injectable()
export class TaskEffects {

  loadTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      concatMap((action) => {
        // its a simple mock
        return of(TaskActions.loadTasksSuccess({ task: TASK_MOCK_DATA }))
      }
      )
    );
  });



  constructor(private actions$: Actions) { }

}
