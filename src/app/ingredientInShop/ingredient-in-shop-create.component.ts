import { Component, OnInit } from '@angular/core';
import { IngredientInShopService } from '../services/ingredientInShop.service';
import { Router } from '@angular/router';
import { IIngredientInShop } from '../interfaces/ingredientInShop';

@Component({
  selector: 'app-ingredient-in-shop-create',
  templateUrl: './ingredient-in-shop-create.component.html',
  styleUrls: ['./ingredient-in-shop-create.component.css']
})
export class IngredientInShopCreateComponent implements OnInit {

  constructor(private _service: IngredientInShopService,
    private _router: Router) { }
  ingredientInShop: IIngredientInShop;
  ingredientId: number;
  shopId: number;
  name: string;
  price: number;
  unit: string;
  quantity: number;

  create() {
    var ingredientInShop: any = {
      name: this.name,      // ingredientId: Math.ceil(Math.random() * 100000)
      price: this.price,
      unit: this.unit,
      quantity: this.quantity,
      ingredientId: this.ingredientId,
      shopId: this.shopId
    };
    this._service.post(ingredientInShop).subscribe();
    this._router.navigate(["ingredientsinshops"]);
  }
  ngOnInit() {
  }

}
