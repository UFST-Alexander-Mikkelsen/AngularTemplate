import { PageEvent } from "@angular/material/paginator";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Page, SimpleDataSource } from "./simple-data-source";



export class Table<T> implements SimpleDataSource<T>{
  public pageEvent$ = new Subject<PageEvent>();
  public page$: Observable<Page<T>>;
  public isLoading$: Observable<Boolean>;
  

  constructor(
    page$: Observable<Page<T>>,
    isLoading$: Observable<Boolean>) {
    this.page$ = page$;
    this.isLoading$ = isLoading$;
  }

  fetch(event: PageEvent): void {
    this.pageEvent$.next(event);
  }

  connect(): Observable<T[]> {
    return this.page$.pipe(map(page => page.content));
  }

  disconnect(): void { }
}
