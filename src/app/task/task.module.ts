import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { StoreModule } from '@ngrx/store';
import * as fromTask from './store/reducers/task.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TaskEffects } from './store/effects/task.effects';
import { TaskResolver } from './task.resolver';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { SortDirective } from '../shared/directives/sort.directive';
import { TaskWrapperComponent } from './task-wrapper.component';
import { SearchPipe } from '../shared/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { CustomTableComponent } from '../shared/custom-table/custom-table.component';

@NgModule({
  declarations: [
    TaskComponent,
    TaskWrapperComponent,
    CustomTableComponent,
    SortDirective,
    SearchPipe
  ],
  providers: [TaskResolver],
  imports: [
    FormsModule,
    CommonModule,
    TaskRoutingModule,
    DragDropModule,
    StoreModule.forFeature(fromTask.taskFeatureKey, fromTask.reducer),
    EffectsModule.forFeature([TaskEffects])
  ]
})
export class TaskModule { }
