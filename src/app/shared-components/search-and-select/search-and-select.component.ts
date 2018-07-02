import { Component, OnInit, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import { IKeyAndValue } from '../../interfaces/keyAndValue';

@Component({
  selector: 'app-search-and-select',
  templateUrl: './search-and-select.component.html',
  styleUrls: ['./search-and-select.component.css']
})
export class SearchAndSelectComponent implements OnInit {

  //Constructor
  constructor() { }

  //Fields and properties
  @Input() options: IKeyAndValue[];
  // @Input() filterPropertyName: string;
  filteredOptions: IKeyAndValue[];

  selectedValue: any;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    console.log("Filtering by value: " + value);
    this._listFilter = value;
    this.filteredOptions = this.listFilter ? this.performFilter(this.listFilter) : this.options;
  }

  @Output() submitClicked: EventEmitter<string> =
  new EventEmitter<string>();

  //Methods
  ngOnInit() {
    console.log("Calling ngOnInit()...")
    this.selectedValue = null;
    this.filteredOptions = this.options;
  }

  onSubmitClicked() {
    this.submitClicked.emit(`The selected value ${this.selectedValue} was submitted!`);
  }

  ngOnChanges(): void {
    console.log("Callng ngOnChanges()...");
    if(this._listFilter) {
    var selectedItem = this.options.filter((item: IKeyAndValue) =>
    item.key.toLocaleLowerCase() === this._listFilter.toLocaleLowerCase())[0];
    if(selectedItem) {
      console.log("Selected Item Key: " + selectedItem.key + ", Value: " + selectedItem.value);
    }
    else {
      console.log("No item selected");
    }
    this.selectedValue = selectedItem.value;
  }
  }

  performFilter(filterBy: string): IKeyAndValue[] {
    filterBy = filterBy.toLocaleLowerCase();
    var selectedItems = this.options.filter((item: any) =>
      item.key.toLocaleLowerCase().indexOf(filterBy) !== -1);
    console.log(selectedItems);
    return selectedItems;
  }
}
