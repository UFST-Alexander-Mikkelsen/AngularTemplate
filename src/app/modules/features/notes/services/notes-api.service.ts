import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from '../../../core/constants/endpoints';
import { ResourceService } from '../../../core/services/resource.service';
import { INotesResultWithPagination } from '../models/notes';

@Injectable({
  providedIn: 'root'
})
export class NoteApiService extends ResourceService<INotesResultWithPagination> {
  

  constructor(http: HttpClient,
    private endpoint: Endpoints) {
    super(http);
  }


  getResourceUrl(): string {
    return this.endpoint?.NOTES;
  }
}
