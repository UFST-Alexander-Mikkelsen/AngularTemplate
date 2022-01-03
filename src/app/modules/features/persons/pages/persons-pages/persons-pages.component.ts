import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPersons } from '../../actions/persons.actions';
import { IContent, IPerson, IPersonResult } from '../../models/person';
import { PersonsApiService } from '../../services/persons-api.service';
import * as fromPerson from './../../selectors/persons.selectors';

@Component({
  selector: 'app-persons-pages',
  templateUrl: './persons-pages.component.html',
  styleUrls: ['./persons-pages.component.scss']
})
export class PersonsPagesComponent implements OnInit {

  @Input() id: string = '';
  currentPage$: IPerson = { url: '', id: '', page: 0, size: 1 };
  data$: IContent = {} as IContent;


  constructor(private store: Store<IPersonResult[]>, private personApiService: PersonsApiService) {
    this.store.select(fromPerson.selectPersonListWithPagination).subscribe((data) => {
      if (data.content) {
        this.data$ = data.content[0];
        console.log("test");
      }
    });
    //console.log("test", this.store.select(fromPerson.selectFirstPerson));
  }

  ngOnInit(): void {
    this.currentPage$.url = this.personApiService.getResourceUrl() + this.id;
    this.getPerson();
  }

  getPerson() {
    let person: IPerson = Object.assign({}, this.currentPage$);
    this.store.dispatch(loadPersons({ person }));
    console.log("getPerson");
  }

}
