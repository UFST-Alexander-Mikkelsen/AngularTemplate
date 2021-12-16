import { DataSource } from '@angular/cdk/collections';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';

export interface SimpleDataSource<T> extends DataSource<T> {
  connect(): Observable<T[]>;
  disconnect(): void;
}

export interface PageRequest {
  page: PageEvent
}

export interface Page<T> {
  content: T[];
  totalElements: number;
  size: number;
  number: number;
}


