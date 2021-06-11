import { moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SortEvent } from '../shared/interfaces/sort';
import { compare } from '../shared/utils/sort-helper';
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
export class TaskComponent implements OnInit{
  @Input() tasks: Task[] = []
  searchText: string = '';
  columns: string[] = ['id', 'text', 'date'];

  constructor() { }

  ngOnInit(): void{
    //default sorting by field
    this.sortTasks({direction: 'asc', column: this.columns[0]})
  }

  onColumnDrop($event: any): void {
    moveItemInArray(this.columns, $event.previousIndex, $event.currentIndex);
  }

  onSortEvent($event: SortEvent): void {
    this.sortTasks($event);
  }

  sortTasks(event: SortEvent): void {
    this.tasks = this.tasks.slice().sort((a, b) => {
      return compare(a, b, event.direction === 'asc', event.column)
    })
  }
}
