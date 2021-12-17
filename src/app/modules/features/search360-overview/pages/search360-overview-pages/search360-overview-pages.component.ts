import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RoutesRecognized } from '@angular/router';
import { Subscription } from 'rxjs';
import { skip } from 'rxjs/operators';
import { ISearch360OverviewAccount } from '../../models/search360-overview-account';
import { Search360OverviewApiService } from '../../services/search360-overview-api.service';

@Component({
  selector: 'app-search360-overview-pages',
  templateUrl: './search360-overview-pages.component.html',
  styleUrls: ['./search360-overview-pages.component.scss']
})
export class Search360OverviewPagesComponent implements OnInit {
  private routeSub: Subscription;

  id: string;
  accountId: string;

  constructor(private search360OverviewApiService: Search360OverviewApiService,
    private route: ActivatedRoute,) {
    this.id = '';
    this.accountId = '';

    this.routeSub = this.route.params.subscribe(params => {
      
      this.id = params['personId'];
      this.accountId = params['accountId'];
    });
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
