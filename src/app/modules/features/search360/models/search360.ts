import { PaginationSend } from "../../../shared/models/pagination";

export interface ISearch360 extends PaginationSend {
  url: string,
  id: string,
  name: string,
  types: string
}
