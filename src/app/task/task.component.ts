import { moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SortEvent } from '../shared/directives/sort.directive';
import { Task } from './store/models/task.model';

@Component({
  selector: 'app-task',
  template: `
  <div>
  <p>You can search, drag columns and sort by click on table header:</p>
  <input [(ngModel)]="searchText" />
  <app-custom-table [data]="tasks" 
                    [searchText]="searchText" 
                    [columns]="columns" 
                    (sortEvent)="onSortEvent($event)"
                    (columnDrop)="onColumnDrop($event)">
  </app-custom-table>
</div>`,
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent {
  @Input() tasks: Task[] = []
  searchText: string = '';
  columns: string[] = ['id', 'text', 'date'];

  constructor() {}

  onColumnDrop($event: any): void {
    moveItemInArray(this.columns, $event.previousIndex, $event.currentIndex);
  }

  onSortEvent($event: SortEvent): void {
    this.tasks = this.tasks.slice().sort((a, b) => {
      return this.compare(a, b, $event.direction === 'asc', $event.column)
    })
  }

  private compare(a: Task, b: Task, isAsc: boolean, property: string) {
    return (a[property] < b[property] ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
