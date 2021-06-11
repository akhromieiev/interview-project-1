import { createAction, props } from '@ngrx/store';
import { Task } from '../models/task.model';

export const loadTasks = createAction(
  '[Task] Load Tasks'
);

export const loadTasksSuccess = createAction(
  '[Task] Load Tasks Success',
  props<{ task: Task[] }>()
);

export const loadTasksFailure = createAction(
  '[Task] Load Tasks Failure',
  props<{ error: any }>()
);
