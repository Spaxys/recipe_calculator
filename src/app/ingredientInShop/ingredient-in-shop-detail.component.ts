import { Component, OnInit } from '@angular/core';
import { IngredientInShopService } from '../services/ingredientInShop.service';
import { IIngredientInShop } from '../interfaces/ingredientInShop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ingredient-in-shop-detail',
  templateUrl: './ingredient-in-shop-detail.component.html',
  styleUrls: ['./ingredient-in-shop-detail.component.css']
})
export class IngredientInShopDetailComponent implements OnInit {

  constructor(private _service: IngredientInShopService, 
    private _route: ActivatedRoute) { }

  ingredientInShop: IIngredientInShop;
  ingredientInShopId: number;
  errorMessage: any;

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.ingredientInShopId = id;
    this._service.getAll()
    .subscribe(ingredientsInShop => this.ingredientInShop = ingredientsInShop.filter(function (item) {
      return item.id === id})[0] || null,
    error => this.errorMessage = <any>error);
  }

}
