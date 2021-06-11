import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { GenericIdentityFn } from '../interfaces/generic-identity';
import { SortEvent } from '../interfaces/sort';
@Component({
  selector: 'app-custom-table',
  template: `
    <table>
    <tr cdkDropList 
        cdkDropListOrientation="horizontal" 
        (cdkDropListDropped)="onDrop($event)">
      <th *ngFor="let column of columns;" 
          appSortTh="{{column}}" 
          (change)="onSortChange($event)" 
          cdkDrag>{{column}}</th>
    </tr>
    <tr *ngFor="let row of data | search:searchText; trackBy: trackRow">
      <td *ngFor="let column of columns">{{row[column]}}</td>
    </tr>
    </table>
`,
  styleUrls: ['./custom-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTableComponent<T extends GenericIdentityFn<T>> {
  @Input() data: T[] = [];
  @Input() searchText: string = '';
  @Input() columns: string[] = [];
  @Output() sortEvent = new EventEmitter();
  @Output() columnDrop = new EventEmitter();

  onSortChange($event: SortEvent): void {
    if (this.columns.includes($event.column) && this.data) {
      this.sortEvent.emit($event);
    }
  }

  onDrop($event: CdkDragDrop<T>): void {
    this.columnDrop.emit($event);
  }

  trackRow(_: number, item: any): any{
    return item ? item.id : null;
  }
}
