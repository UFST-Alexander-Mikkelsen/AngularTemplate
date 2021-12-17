import { PaginationReceived, PaginationSend } from "../../../shared/models/pagination";


export interface IPerson extends PaginationSend {
  url: string;
  id: string;
}

export interface IPersonsResultWithPagination extends PaginationReceived {
  content: IContent[]
}

export interface IName {
  seqNumber: number;
  fullName: string;
  firstName: string;
  middleName: string;
  lastName: string;
  version: number;
}

export interface IPersonIdNumberPK {
  id: string;
  idType: string;
}

export interface IdNumber {
  personIdNumberPK: IPersonIdNumberPK;
  idType: string;
  primaryId: string;
  idNumber: string;
  version: number;
}

export interface IPersonResult {
  personId: string;
  language: string;
  type: string;
  names: IName[];
  idNumbers: IdNumber[];
}

export interface IContent {
  person: IPersonResult;
  betalingsEvne: string;
  betalingsEvneCalc: string;
  totalSaldo: string;
}
