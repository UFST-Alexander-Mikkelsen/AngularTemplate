import { createAction, props } from '@ngrx/store';
import { Page } from '../../../shared/models/simple-table/simple-data-source';
import { INote, INoteResult } from '../../notes/models/notes';

export const loadNotes = createAction(
  '[notes] Load Obligations',
  props<{ note: INote }>()
);

export const loadNotesSuccess = createAction(
  '[Obligations] Load Obligations Success',
  props<{ noteResultWithPagination: Page<INoteResult> }>()
);

export const loadNotesFailure = createAction(
  '[Obligations] Load Obligations Failure',
  props<{ error: any }>()
);

