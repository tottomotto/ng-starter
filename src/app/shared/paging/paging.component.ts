import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PagingInfo } from './paging-info';

@Component({
  selector: 'pe-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit, OnChanges {
  @Input() info: PagingInfo;
  @Input() currentPage: number;

  pages: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.info && this.info) {
      const {total_pages} = this.info;

      while (this.pages.length < total_pages) {
        this.pages.push(this.pages.length + 1);
      }

      if (this.pages.length > total_pages) {
        this.pages = this.pages.splice(0, total_pages);
      }
    }
  }

}
