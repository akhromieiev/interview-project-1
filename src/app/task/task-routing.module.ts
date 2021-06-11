import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskWrapperComponent } from './task-wrapper.component';
import { TaskComponent } from './task.component';
import { TaskResolver } from './task.resolver';

const routes: Routes = [{
  path: '',
  component: TaskWrapperComponent,
  resolve: {
    TaskResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
