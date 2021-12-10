import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ISearch360 } from "../models/search360";

@Injectable({
  providedIn: "root"
})

export class Search360Observer {
  public observable: Subject<ISearch360> = new Subject<ISearch360>();

  constructor() { }

  public onNewSearch360(search360: ISearch360) {
    this.observable.next(search360);
  }
}
