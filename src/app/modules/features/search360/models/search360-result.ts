import { PaginationReceived } from "../../../shared/models/pagination";

export interface ISearch360ResultWithPagination extends PaginationReceived {
  content: ISearch360Result[]
}

export interface ISearch360Result {
  fullName: string;
  idNbrType: string;
  idNbr: string;
  personId: string;
  link: string;
}
