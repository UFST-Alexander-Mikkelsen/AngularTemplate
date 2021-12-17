import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from '../../../core/constants/endpoints';
import { ResourceService } from '../../../core/services/resource.service';
import { IObligationResultWithPagination } from '../models/obligation';

@Injectable({
  providedIn: 'root'
})
export class ObligationsApiService extends ResourceService<IObligationResultWithPagination> {
  

  constructor(http: HttpClient,
    private endpoint: Endpoints) {
    super(http);
  }


  getResourceUrl(): string {
    return this.endpoint?.OBLIGATIONS;
  }
}
