import { PaginationReceived, PaginationSend } from "../../../shared/models/pagination"


export interface ITodo extends PaginationSend {
  url: string;
  id: string;
}

export interface ITodoResultWithPagination extends PaginationReceived {
  content: ITodoResult[];
}

export interface ITodoResult {
  id: string;
  assignedTo: string;
  tdTypeCd: string;
  entryStatusFlg: string ;
  comments: string;
  description: string;
  tdPriorityFlg: string;
}
