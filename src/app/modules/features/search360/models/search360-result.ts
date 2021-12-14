import { PaginationReceived } from "../../../shared/models/pagination";

export interface ISearch360ResultWithPagination {
  search360Results: ISearch360Result[],
  pagination: PaginationReceived
}
export interface ISearch360Result {
  fullName: string;
  idNbrType: string;
  idNbr: string;
  personId: string;
  link: string;
}
