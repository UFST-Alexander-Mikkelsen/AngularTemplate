import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { Endpoints } from '../../../core/constants/endpoints';
import { CreateUrlService } from '../../../core/services/create-url.service';
import { ResourceService } from '../../../core/services/resource.service';
import { ISearch360 } from '../models/search360';

@Injectable({
  providedIn: 'root'
})
export class Search360ApiService extends ResourceService<ISearch360> {

  constructor(
    protected httpClient: HttpClient,
    private endpoints: Endpoints,
    private urls: CreateUrlService,
    @Inject('id') @Optional() public id?: string,
    @Inject('name') @Optional() public name?: string  ) {
    super(httpClient);
  }

  getResourceUrl(): string {
    const paramter = new HttpParams();
    if (!isNullOrUndefined(this.id)) paramter.set('id', this.id as string);
    if (!isNullOrUndefined(this.name)) paramter.set('id', this.name as string);

    return this.urls?.createUrlWithQueryParameters(this.endpoints?.SEARCH360, paramter.toString);
  }
}
