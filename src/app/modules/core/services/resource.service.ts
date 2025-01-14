import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CreateUrlService } from './create-url.service';
import { Endpoints } from '../constants/endpoints';

@Injectable({
  providedIn: 'root'
})
export abstract class ResourceService<T> {

  constructor(protected httpClient: HttpClient) {
  }

  abstract getResourceUrl(): string;

  toServerModel(entity: T): any {
    return entity;
  }

  fromServerModel(json: any): T {
    return json;
  }

  getList(url: string, params: HttpParams): Observable<T> {

    return this.httpClient.get<T[]>(`/${url}?${params.toString()}`)
      .pipe(
        map((list) => this.fromServerModel(list)),
        catchError(this.handleError)
      );
  }

  getAll(): Observable<T[]> {
    const url = this.getResourceUrl();
    return this.httpClient.get<T[]>(url)
      .pipe(
        map((list) => list.map((item) => this.fromServerModel(item))),
        catchError(this.handleError)
      );
  }

  get(id: string | number): Observable<T> {
    const url = this.getResourceUrl();
    return this.httpClient.get<T>(`/${url}/${id}`)
      .pipe(
        map((json) => this.fromServerModel(json)),
        catchError(this.handleError)
      );
  }

  add(resource: T): Observable<any> {
    const url = this.getResourceUrl();
    return this.httpClient.post(`/${url}`, this.toServerModel(resource))
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(id: string | number): Observable<any> {
    const url = this.getResourceUrl();
    return this.httpClient.delete(`/${url}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  update(resource: T, id: string | number) {
    const url = this.getResourceUrl();
    return this.httpClient.put(`/${url}/${id}`, this.toServerModel(resource))
      .pipe(
        catchError(this.handleError)
      );
  }

  protected handleError(error: HttpErrorResponse) {
    // Handle the HTTP error here
    console.log("Http handleError, error object=");
    console.log(error);
    return throwError('Something wrong happened');
  }

}
