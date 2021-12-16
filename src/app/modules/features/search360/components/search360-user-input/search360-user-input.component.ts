import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Endpoints } from '../../../../core/constants/endpoints';
import { CreateUrlService } from '../../../../core/services/create-url.service';
import { isEmpty } from '../../../../shared/utils/tool';
import { ISearch360 } from '../../models/search360';
import { Search360Observer } from '../../services/search360-observer';

@Component({
  selector: 'app-search360-user-input',
  templateUrl: './search360-user-input.component.html',
  styleUrls: ['./search360-user-input.component.scss']
})
export class Search360UserInputComponent implements OnInit {

  public search360Form: ISearch360;
  public types: FormGroup;


  constructor(private search360Observer: Search360Observer,
    private endpoints: Endpoints,
    private urls: CreateUrlService,
    fb: FormBuilder) {
    this.types = fb.group({
      cpr: false,
      cvr: false,
      se: false,
    });

    this.search360Form = { url: '', id: '', name: '', types: '', page: 0, size: 25 };
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void { }

  onSearch() {
    this.search360Form.id.trim();
    this.search360Form.name.trim();

    this.search360Form.types = this.getTypes();

    if (!isEmpty(this.search360Form.id) || !isEmpty(this.search360Form.name)) {

      if (this.search360Form.name == "%") {
        this.search360Form.name = "";
      }

      console.log(this.search360Form);

      if (!isEmpty(this.search360Form.name)) {
        this.search360Form.url = (this.endpoints?.SEARCH360BYNAME + this.search360Form.name).toString();
      }
      if (!isEmpty(this.search360Form.id)) {
        this.search360Form.url = (this.endpoints?.SEARCH360BYTYPE + this.search360Form.id).toString();
      }

      this.search360Observer.onNewSearch360(this.search360Form);

    }
  }

  getTypes(): string {
    let types = "";

    if (this.types.controls["cpr"].value) {
      types += "CPR,";
    }
    if (this.types.controls["cvr"].value) {
      types += "CVR,";
    }
    if (this.types.controls["se"].value) {
      types += "SE,";
    }
    return types;
  }
}
