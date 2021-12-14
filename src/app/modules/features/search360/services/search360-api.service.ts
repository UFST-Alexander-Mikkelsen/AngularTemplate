import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Endpoints } from '../../../core/constants/endpoints';
import { CreateUrlService } from '../../../core/services/create-url.service';
import { ResourceService } from '../../../core/services/resource.service';
import { ISearch360Result, ISearch360ResultWithPagination } from '../models/search360-result';

@Injectable({
  providedIn: 'root'
})
export class Search360ApiService extends ResourceService<ISearch360ResultWithPagination> {

  constructor(
    protected httpClient: HttpClient,
    private endpoints: Endpoints,
    private urls: CreateUrlService,
  ) {
    super(httpClient);
  }

  getSearch360(id: string, name: string): Observable<ISearch360Result[]> {
    id.trim();
    name.trim();

    let url: string = '';

    if (id.length > 0) {
      url = this.urls?.createUrlWithQueryParameters(this.endpoints?.SEARCH360BYTYPE + id);
    }
    else if (name.length > 0) {
      url = this.urls?.createUrlWithQueryParameters(this.endpoints?.SEARCH360BYNAME + name);
      
    }

    console.log(url);
    return this.httpClient.get<ISearch360Result>(url)
      .pipe(
        map((item) => this.fromServerModel(item)),
        catchError(this.handleError)
      );
  }

  getResourceUrl(): string {
    return this.urls?.createUrl(this.endpoints?.SEARCH360BYNAME);
  }
}
