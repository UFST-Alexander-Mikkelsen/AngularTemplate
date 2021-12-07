import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EditRowInfo } from 'src/app/modules/shared/models/edit-row-info';
import { Table, TableColumn, TableHeader } from '../../../../shared/models/table';
import { ISearch360 } from '../../models/search360';
import { TableService } from '../../../../shared/services/tables/table.service';

@Component({
  selector: 'app-search360',
  templateUrl: './search360.component.html',
  styleUrls: ['./search360.component.scss']
})
export class Search360Component implements OnInit {
  @Input()
  data!: Observable<ISearch360[]>;

  constructor(private dataService: TableService<ISearch360>) { }

  getTable(): Table<ISearch360> {
    const headers: TableHeader[] = [
      new TableHeader('ID', true),
      new TableHeader('Full Name', true),
      new TableHeader('Type', true),
      new TableHeader('Type Nummer', true)
    ];

    const colums: TableColumn[] = [
      new TableColumn('id', false),
      new TableColumn('fullname', false),
      new TableColumn('idnbrType', false),
      new TableColumn('idNbr', false)
    ]

    return new Table(headers, colums, this.dataService, )
  }

  update(editRowInfo: EditRowInfo) {
    console.warn(editRowInfo);
  }

  ngOnInit(): void {
    this.data?.subscribe(data => {
      let initdata: ISearch360[] = [];
      data.forEach(element => {
        const newSearch360 = { ...element }
        initdata.push(newSearch360)
      });
      this.dataService.setData(initdata);
    });
  }
}
