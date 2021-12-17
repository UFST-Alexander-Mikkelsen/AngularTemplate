import { PaginationReceived, PaginationSend } from "../../../shared/models/pagination";


export interface IObligation extends PaginationSend {
  url: string;
  id: string;
}

export interface IObligationResultWithPagination extends PaginationReceived {
  content: IObligationResult[]
}

export interface IObligationResult {
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
