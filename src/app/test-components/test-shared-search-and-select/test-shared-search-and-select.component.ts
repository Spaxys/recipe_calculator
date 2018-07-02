import { Component, OnInit } from '@angular/core';
import { SearchAndSelectComponent } from '../../shared-components/search-and-select/search-and-select.component';
import { IKeyAndValue } from '../../interfaces/keyAndValue';

@Component({
  selector: 'app-test-shared-search-and-select',
  templateUrl: './test-shared-search-and-select.component.html',
  styleUrls: ['./test-shared-search-and-select.component.css']
})
export class TestSharedSearchAndSelectComponent implements OnInit {

  constructor() { }
  options: IKeyAndValue[] = [
    {
      key: "Coop", value: "1" 
    },
    {
      key: "ICA", value: "2" 
    },
    {
      key: "City Gross", value: "3" 
    }
  ];
  pageTitle = "Select a value and click Submit";

  ngOnInit() {
  }

  onSubmitClicked(message: string): void {
    this.pageTitle = 'Selected value: ' + message;
}
}
