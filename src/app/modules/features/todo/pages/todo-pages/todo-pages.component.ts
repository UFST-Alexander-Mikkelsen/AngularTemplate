import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Table } from '../../../../shared/models/simple-table/table';
import { loadTodos } from '../../actions/todo.actions';
import { ITodo, ITodoResult } from '../../models/todo';
import * as fromTodo from '../../selectors/todo.selectors';
import { TodoApiService } from '../../service/todo-api.service';

@Component({
  selector: 'app-todo-pages',
  templateUrl: './todo-pages.component.html',
  styleUrls: ['./todo-pages.component.scss']
})
export class TodoPagesComponent implements OnInit {

  @Input() id: string = '';
  currentPage$: ITodo = { url: '', id: '', page: 0, size: 25 };
  displayedColumns = ['id', 'assignedTo', 'tdTypeCd', 'entryStatusFlg', 'comments', 'description', 'tdPriorityFlg'];
  dataSource$ = new Table<ITodoResult>(this.store.select(fromTodo.selectTodoListWithPagination));

  constructor(private store: Store<ITodoResult[]>, private todoApiService: TodoApiService) {
    this.dataSource$.pageEvent$.subscribe((event) => this.fetchNewPage(event));
  }

  ngOnInit(): void {
    console.log(this.id);
    this.currentPage$.url = this.todoApiService.getResourceUrl() + this.id;
    this.getTodo();
  }

  fetchNewPage(event: PageEvent) {
    this.currentPage$.page = event.pageIndex;
    this.currentPage$.size = event.pageSize;
  }

  getTodo() {
    let todo: ITodo = Object.assign({}, this.currentPage$);
    this.store.dispatch(loadTodos({ todo }));
  }

}
