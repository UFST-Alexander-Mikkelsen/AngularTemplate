import { Component, Input, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Table } from '../../../../shared/models/simple-table/table';
import { loadSearch360 } from '../../actions/search360.actions';
import { ISearch360 } from '../../models/search360';
import { ISearch360Result } from '../../models/search360-result';
import * as fromSearch360 from '../../selectors/search360.selectors';
import { Search360Observer } from '../../services/search360-observer';

@Component({
  selector: 'app-search360-pages',
  templateUrl: './search360-pages.component.html',
  styleUrls: ['./search360-pages.component.scss']
})
export class Search360PagesComponent implements OnInit {

  currentPage$: ISearch360 = { url: '', id: '', name: '', types: '', page: 0, size: 10 };
  displayedColumns = ['personId', 'fullName', 'idNbrType', 'idNbr'];
  dataSource$ = new Table<ISearch360Result>(this.store.select(fromSearch360.selectSearch360ResultWithPagination), this.store.select(fromSearch360.selectSearch360IsLoading));

  ngOnInit() {
  }

  constructor(
    private store: Store<ISearch360Result[]>,
    private search360Observer: Search360Observer,
  ) {
    this.dataSource$.pageEvent$.subscribe((event) =>
      this.fetch(event)
    );

    search360Observer.observable.subscribe((value) =>
      this.getSearch360(value)
    );
  }

  ngOnDestroy() {
    this.search360Observer.observable.unsubscribe();
  }

  fetch(event: PageEvent) {
    this.currentPage$.page = event.pageIndex;
    this.currentPage$.size = event.pageSize;

    const search360: ISearch360 = Object.assign({}, this.currentPage$);
    console.log(search360);
    this.store.dispatch(loadSearch360({ search360 }));
  }

  getSearch360(search360Obj: ISearch360) {
    this.currentPage$ = search360Obj;
    let search360: ISearch360 = Object.assign({}, search360Obj);
    this.store.dispatch(loadSearch360({ search360 }));
  }
}
