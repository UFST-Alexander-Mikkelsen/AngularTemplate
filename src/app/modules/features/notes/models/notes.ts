import { PaginationReceived, PaginationSend } from "../../../shared/models/pagination";


export interface INote extends PaginationSend {
  url: string;
  id: string;
}

export interface INotesResultWithPagination extends PaginationReceived {
  content: INoteResult[]
}

export interface INoteResult {
  claimId: string;
  externalClaimId: string;
  fordringsTypeKode: string;
  fordringshaverRef: string;
  originalAmount: string;
  currentAmount: string;
  fordringFrom: string;
  fordringTo: string;
  stiftelse: string;
  modtagelsesTidspunkt: string;
}
