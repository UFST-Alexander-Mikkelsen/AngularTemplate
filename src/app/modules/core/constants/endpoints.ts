import { Injectable } from '@angular/core';
/**
 * Those constants are the endpoint parts of the API endpoints.
 * You can find the base URL in the environment files in the src/environments folder 
 * You use the {@link CreateUrlService} to combine them together with the parameters if there are any.
 */
@Injectable()
export class Endpoints {

  public readonly ACCOUNTS: string = 'accounts';
  public readonly ACCOUNT: string = 'account/';
  public readonly CUSTOMERS: string = 'customers';
  public readonly SEARCH360BYTYPE: string = 'api/person/search/personid/';
  public readonly SEARCH360BYNAME: string = 'api/person/search/name/';
  public readonly SEARCH360: string = 'api/person/search';
}
