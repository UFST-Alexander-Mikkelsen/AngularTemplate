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

  

  getSearch360OverviewAccount(): ISearch360OverviewAccount {
    return {
      cprNumber: "080998-2010",
      personId: "0208093",
      captiaId: "0208093",
      fullName: "Test Person",
      team: "Test Team",
      emailAddresses: [{ emailAddress: "testemail@doamin.com" }, { emailAddress: "testemail2@doamin.com" }],
      addresses: [{ address: "skyldner test addresse" }, { address: "skyldner test addresse 2" }]
    };
  }
}
