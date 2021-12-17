import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from '../../../core/constants/endpoints';
import { ResourceService } from '../../../core/services/resource.service';
import { IPersonsResultWithPagination } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonsApiService extends ResourceService<IPersonsResultWithPagination> {
  

  constructor(http: HttpClient,
    private endpoint: Endpoints) {
    super(http);
  }


  getResourceUrl(): string {
    return this.endpoint?.PERSON;
  }
}
