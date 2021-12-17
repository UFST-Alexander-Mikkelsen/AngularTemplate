import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from '../../../core/constants/endpoints';
import { ResourceService } from '../../../core/services/resource.service';
import { ITodoResultWithPagination } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService extends ResourceService<ITodoResultWithPagination> {


  constructor(http: HttpClient,
    private endpoint: Endpoints) {
    super(http);
  }


  getResourceUrl(): string {
    return this.endpoint?.TODOS;
  }
}
