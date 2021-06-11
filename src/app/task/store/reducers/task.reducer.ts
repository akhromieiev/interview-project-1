import { Action, createReducer, on } from '@ngrx/store';
import * as TaskActions from '../actions/task.actions';
import { Task } from '../models/task.model';

export const taskFeatureKey = 'task';

export interface State {
  [taskFeatureKey]: Task[]
}

export const initialState: State = {
  task: []
};

export const reducer = createReducer(
  initialState,

  on(TaskActions.loadTasks, state => {
    return state
  }),
  on(TaskActions.loadTasksSuccess, (state, action) => {
    return { ...state, task: action.task };
  }),
  on(TaskActions.loadTasksFailure, (state, action) => state),

);

