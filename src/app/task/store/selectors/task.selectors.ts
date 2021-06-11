import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTask from '../reducers/task.reducer';

export const selectTaskState = createFeatureSelector<fromTask.State>(
  fromTask.taskFeatureKey
);

export const selectTask = createSelector(selectTaskState, (state: fromTask.State) => state.task)