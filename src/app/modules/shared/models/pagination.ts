export interface PaginationSend {
  pageSize: number,
  pageIndex: number,
}

export interface PaginationReceived {
  pageSize: number,
  pageIndex: number,
  total:number,
}
