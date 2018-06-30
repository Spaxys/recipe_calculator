import { Component, OnInit } from '@angular/core';
import { IngredientInShopService } from '../services/ingredientInShop.service';
import { Router } from '@angular/router';
import { IIngredientInShop } from '../interfaces/ingredientInShop';

@Component({
  selector: 'app-ingredient-in-shop-list',
  templateUrl: './ingredient-in-shop-list.component.html',
  styleUrls: ['./ingredient-in-shop-list.component.css']
})
export class IngredientInShopListComponent implements OnInit {

  constructor(private _service: IngredientInShopService, 
    private _router: Router) { }

    ingredientsInShops: IIngredientInShop[];
    filteredIngredientsInShops: IIngredientInShop[];
    errorMessage: any;    
    _listFilter: string;
    get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value:string) {
      console.log("Filtering by value: " + value);
      this._listFilter = value;
      this.filteredIngredientsInShops = this.listFilter? this.performFilter(this.listFilter) : this.ingredientsInShops;
  }
  
    ngOnInit() {
      this._service.getAll()
      .subscribe(ingredientsInShops => {
        console.log(ingredientsInShops);
        this.ingredientsInShops = ingredientsInShops;
        this.filteredIngredientsInShops = this.ingredientsInShops;
       },
      error => this.errorMessage = <any>error);
    }

    performFilter(filterBy: string): IIngredientInShop[] {
      filterBy = filterBy.toLocaleLowerCase();
      var selectedItems = this.ingredientsInShops.filter((ingredientsInShops: IIngredientInShop) =>
  ingredientsInShops.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
      console.log(selectedItems);
      return selectedItems;
  }

}
