import { Component, OnInit } from '@angular/core';
import { ISearch360OverviewAccount } from '../../models/search360-overview-account';
import { Search360OverviewApiService } from '../../services/search360-overview-api.service';

@Component({
  selector: 'app-search360-overview-pages',
  templateUrl: './search360-overview-pages.component.html',
  styleUrls: ['./search360-overview-pages.component.scss']
})
export class Search360OverviewPagesComponent implements OnInit {
  public search360OverviewAccount: ISearch360OverviewAccount;

  constructor(private search360OverviewApiService: Search360OverviewApiService) {
    this.search360OverviewAccount = search360OverviewApiService.getSearch360OverviewAccount();
  }

  ngOnInit(): void {
  }

}
