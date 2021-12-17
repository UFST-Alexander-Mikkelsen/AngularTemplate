import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from '../../../core/constants/endpoints';
import { CreateUrlService } from '../../../core/services/create-url.service';
import { ISearch360OverviewAccount } from '../models/search360-overview-account';

@Injectable({
  providedIn: 'root'
})
export class Search360OverviewApiService {

  constructor(
    protected httpClient: HttpClient,
    private endpoints: Endpoints,
    private urls: CreateUrlService,
  ) { }
}
