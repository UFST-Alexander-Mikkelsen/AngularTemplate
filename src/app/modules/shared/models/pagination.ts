export interface PaginationSend {
  size: number,
  page: number,
}

export interface PaginationReceived {
  size: number,
  number: number,
  totalElements: number,
}
