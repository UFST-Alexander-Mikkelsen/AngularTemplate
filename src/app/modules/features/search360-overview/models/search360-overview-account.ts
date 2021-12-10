export interface ISearch360OverviewAccount {
  cprNumber: string;
  personId: string;
  captiaId: string;
  fullName: string;
  team: string;
  emailAddresses: IEmailAddresses[];
  addresses: IAddresses[];
}

export interface IEmailAddresses {
  emailAddress: string;
}
export interface IAddresses {
  address: string;
}


export class Search360OverviewAccount implements ISearch360OverviewAccount {
  cprNumber: string;
  personId: string;
  captiaId: string;
  fullName: string;
  team: string;
  emailAddresses: IEmailAddresses[];
  addresses: IAddresses[];

  constructor() {
    this.cprNumber = "";
    this.captiaId = "";
    this.personId = "";
    this.fullName = "";
    this.team = "";
    this.emailAddresses = [{ emailAddress: "" }];
    this.addresses = [{ address: "" }];
  }
}
