import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Table } from '../../../../shared/models/simple-table/table';
import { loadObligations } from '../../actions/obligations.actions';
import { IObligation, IObligationResult } from '../../models/obligation';
import { ObligationsApiService } from '../../services/obligations-api.service';
import * as fromObligation from './../../selectors/obligation.selectors';

@Component({
  selector: 'app-obligation-pages',
  templateUrl: './obligation-pages.component.html',
  styleUrls: ['./obligation-pages.component.scss']
})
export class ObligationPagesComponent implements OnInit {
  @Input() id: string ='';
  currentPage$: IObligation = { url: '', id: '', page: 0, size: 25 };
  displayedColumns = ['claimId', 'externalClaimId', 'fordringsTypeKode', 'fordringshaverRef', 'originalAmount', 'currentAmount', 'fordringFrom', 'fordringTo', 'stiftelse', 'modtagelsesTidspunkt'];
  dataSource$ = new Table<IObligationResult>(this.store.select(fromObligation.selectObligationListWithPagination));

  constructor(private store: Store<IObligationResult[]>, private obligationsApiService: ObligationsApiService)
  {
    this.dataSource$.pageEvent$.subscribe((event) => this.fetchNewPage(event));
  }

  ngOnInit(): void {
    console.log(this.id);
    this.currentPage$.url = this.obligationsApiService.getResourceUrl() + this.id;
    this.getObligation();
  }

  fetchNewPage(event: PageEvent) {
    this.currentPage$.page = event.pageIndex;
    this.currentPage$.size = event.pageSize;
  }

  getObligation() {
    let obligation: IObligation = Object.assign({}, this.currentPage$);
    this.store.dispatch(loadObligations({ obligation }));
    console.log("Obligation ", this.dataSource$.page$);
  }

}
