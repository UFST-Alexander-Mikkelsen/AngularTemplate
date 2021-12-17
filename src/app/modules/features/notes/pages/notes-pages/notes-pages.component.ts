import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Table } from '../../../../shared/models/simple-table/table';
import { loadNotes } from '../../actions/notes.actions';
import { INote, INoteResult } from '../../models/notes';
import { NoteApiService } from '../../services/notes-api.service';
import * as fromNote from './../../selectors/notes.selectors';

@Component({
  selector: 'app-notes-pages',
  templateUrl: './notes-pages.component.html',
  styleUrls: ['./notes-pages.component.scss']
})
export class NotesPagesComponent implements OnInit {
  @Input() id: string = '';
  currentPage$: INote = { url: '', id: '', page: 0, size: 25 };
  displayedColumns = ['claimId', 'externalClaimId', 'fordringsTypeKode', 'fordringshaverRef', 'originalAmount', 'currentAmount', 'fordringFrom', 'fordringTo', 'stiftelse', 'modtagelsesTidspunkt'];
  dataSource$ = new Table<INoteResult>(this.store.select(fromNote.selectNoteListWithPagination), this.store.select(fromNote.selectNoteIsLoading));

  constructor(private store: Store<INoteResult[]>, private notesApiService: NoteApiService) {
    this.dataSource$.pageEvent$.subscribe((event) => this.fetchNewPage(event));
  }

  ngOnInit(): void {
    console.log(this.id);
    this.currentPage$.url = this.notesApiService.getResourceUrl() + this.id;
    this.getNotes();
  }

  fetchNewPage(event: PageEvent) {
    this.currentPage$.page = event.pageIndex;
    this.currentPage$.size = event.pageSize;

    this.getNotes();
  }

  getNotes() {
    let note: INote = Object.assign({}, this.currentPage$);
    this.store.dispatch(loadNotes({ note }));
  }
}
