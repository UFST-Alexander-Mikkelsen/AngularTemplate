import { Component, Input, OnInit } from '@angular/core';
import { ISearch360OverviewAccount, Search360OverviewAccount } from '../../models/search360-overview-account';

@Component({
  selector: 'app-search360-overview-person',
  templateUrl: './search360-overview-person.component.html',
  styleUrls: ['./search360-overview-person.component.scss']
})
export class Search360OverviewPersonComponent implements OnInit {
  @Input()
  public id: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
