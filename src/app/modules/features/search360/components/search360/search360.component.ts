import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EditRowInfo } from 'src/app/modules/shared/models/edit-row-info';
import { Endpoints } from '../../../../core/constants/endpoints';
import { Table, TableColumn, TableHeader } from '../../../../shared/models/table';
import { TableService } from '../../../../shared/services/tables/table.service';
import { ISearch360Result } from '../../models/search360-result';

@Component({
  selector: 'app-search360',
  templateUrl: './search360.component.html',
  styleUrls: ['./search360.component.scss']
})
export class Search360Component implements OnInit {
  @Input()
  data!: Observable<ISearch360Result[]>;

  constructor(private dataService: TableService<ISearch360Result>,
    private endpoints: Endpoints) {
  }

  getTable(): Table<ISearch360Result> {
    const headers: TableHeader[] = [
      new TableHeader('ID', true),
      new TableHeader('Fulde Navn', true),
      new TableHeader('Type', true),
      new TableHeader('Type ID', true),
      new TableHeader('Link', true),
    ];

    const colums: TableColumn[] = [
      new TableColumn('personId', false),
      new TableColumn('fullName', false),
      new TableColumn('idnbrType', false),
      new TableColumn('idNbr', false),
      new TableColumn('link', false, "link"),
    ]

    return new Table(headers, colums, this.dataService)
  }

  update(editRowInfo: EditRowInfo) {
    console.warn(editRowInfo);
  }

  ngOnInit(): void {
    this.data?.subscribe(data => {
      let initdata: ISearch360Result[] = [];
      data.forEach(element => {
        const link = this.endpoints?.ACCOUNT + element.personId;
        const newSearch360 = { ...element, link: link };
        initdata.push(newSearch360);
      });
      this.dataService.setData(initdata);
    });
  }
}
