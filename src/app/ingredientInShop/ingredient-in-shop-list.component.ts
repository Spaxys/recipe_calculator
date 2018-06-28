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
    errorMessage: any;
  
    ngOnInit() {
      this._service.getAll()
      .subscribe(ingredientsInShops => this.ingredientsInShops = ingredientsInShops,
      error => this.errorMessage = <any>error);
    }

}
