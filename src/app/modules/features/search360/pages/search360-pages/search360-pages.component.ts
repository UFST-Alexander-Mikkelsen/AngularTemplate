import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadSearch360 } from '../../actions/search360.actions';
import * as fromSearch360 from '../../selectors/search360.selectors';

@Component({
  selector: 'app-search360-pages',
  templateUrl: './search360-pages.component.html',
  styleUrls: ['./search360-pages.component.scss']
})
export class Search360PagesComponent implements OnInit {

  search360$ = this.store.select(fromSearch360.selectSearch360List)

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.getSearch360();
  }

  getSearch360() {
    this.store.dispatch(loadSearch360());
  }

}
