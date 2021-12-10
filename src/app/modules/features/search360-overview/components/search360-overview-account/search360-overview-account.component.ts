import { Component, Input, OnInit } from '@angular/core';
import { ISearch360OverviewAccount, Search360OverviewAccount } from '../../models/search360-overview-account';

@Component({
  selector: 'app-search360-overview-account',
  templateUrl: './search360-overview-account.component.html',
  styleUrls: ['./search360-overview-account.component.scss']
})
export class Search360OverviewAccountComponent implements OnInit {
  @Input()
  public data: ISearch360OverviewAccount = new Search360OverviewAccount();

  constructor() { }

  ngOnInit(): void {
  }

}
