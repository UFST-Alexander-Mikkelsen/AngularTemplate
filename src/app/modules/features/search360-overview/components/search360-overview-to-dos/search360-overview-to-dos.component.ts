import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search360-overview-to-dos',
  templateUrl: './search360-overview-to-dos.component.html',
  styleUrls: ['./search360-overview-to-dos.component.scss']
})
export class Search360OverviewToDosComponent implements OnInit {
  @Input()
  id :string ='';
  constructor() { }

  ngOnInit(): void {

  }

}
