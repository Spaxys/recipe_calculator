import { Component, OnInit } from '@angular/core';
import { IngredientInShopService } from '../services/ingredientInShop.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IIngredientInShop } from '../interfaces/ingredientInShop';

@Component({
  selector: 'app-ingredient-in-shop-edit',
  templateUrl: './ingredient-in-shop-edit.component.html',
  styleUrls: ['./ingredient-in-shop-edit.component.css']
})
export class IngredientInShopEditComponent implements OnInit {

  constructor(private _service: IngredientInShopService,
  private _route: ActivatedRoute,
  private _router: Router) { }

  ingredientInShop: IIngredientInShop;
  ingredientInShopId: number;
  errorMessage: any;

  put() {
    this._service.put(this.ingredientInShop.id, this.ingredientInShop).subscribe();
    this._router.navigate(["ingredientsinshops"]);
  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.ingredientInShopId = id;
    this._service.getAll()
    .subscribe(ingredientsInShop => this.ingredientInShop = ingredientsInShop.filter(function (item) {
      return item.id === id})[0] || null,
    error => this.errorMessage = <any>error);
  }

}
