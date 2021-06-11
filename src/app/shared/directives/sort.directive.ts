import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

export type SortDirection = 'asc' | 'desc' | '';

export interface SortEvent {
  column: string;
  direction: SortDirection
}

@Directive({
  selector: 'th[appSortTh]'
})
export class SortDirective {
  @Input() appSortTh: string = '';
  @Input() appSortThDir: SortDirection = 'asc';
  @Output() change: EventEmitter<any> = new EventEmitter()
  @HostListener('click', ['$event.target'])
  sortChange(): void {
    this.appSortThDir = this.appSortThDir === 'asc' ? 'desc': 'asc';
    this.change.emit({direction: this.appSortThDir, column: this.appSortTh});
  }
}
