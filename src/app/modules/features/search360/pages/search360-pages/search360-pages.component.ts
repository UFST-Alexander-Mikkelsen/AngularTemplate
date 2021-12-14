import { Component, Input, OnInit, Optional } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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

  search360Results$: Observable<ISearch360Result[]> = this.store.select(fromSearch360.selectSearch360List);

  ngOnInit() {
  }

  constructor(
    private store: Store<ISearch360Result[]>,
    private search360Observer: Search360Observer
  ) {
    search360Observer.observable.subscribe((value) =>
      this.getSearch360(value)
    );
  }

  ngOnDestroy() {
    this.search360Observer.observable.unsubscribe();
  }

  getSearch360(search360: ISearch360) {

    // Update paginator
    this.store.dispatch(loadSearch360({ search360 }));
  }
}
