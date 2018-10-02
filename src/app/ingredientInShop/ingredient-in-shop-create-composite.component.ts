import { Component, OnInit } from '@angular/core';
import { IngredientInShopService } from '../services/ingredientInShop.service';
import { Router } from '@angular/router';
import { IIngredientInShop } from '../interfaces/ingredientInShop';
import { IIngredient } from '../interfaces/ingredient';
import { IShop } from '../interfaces/shop';
import { IngredientService } from '../services/ingredient.service';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-ingredient-in-shop-create-composite',
  templateUrl: './ingredient-in-shop-create-composite.component.html',
  styleUrls: ['./ingredient-in-shop-create-composite.component.css']
})
export class IngredientInShopCreateCompositeComponent implements OnInit {

  constructor(private _service: IngredientInShopService,
    private _shopService: ShopService,
    private _ingredientService: IngredientService,
    private _router: Router) { }
  ingredientInShop: IIngredientInShop;
  ingredients: IIngredient[];
  shops: IShop[];
  ingredientId: number;
  shopId: number;
  name: string;
  price: number;
  unit: string;
  quantity: number;
  errorMessage: any;

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

  shopChanged(shopId)
  {
    console.log(shopId)
    this.shopId = shopId;
  }


  ingredientChanged(ingredientId)
  {
    console.log(ingredientId)
    this.ingredientId = ingredientId;
    var myIngredients = this.ingredients.filter(function (item) {
      return item.id == ingredientId;
    });
    var myIngredient = myIngredients[0];
    if(myIngredient)
    {
    this.price = myIngredient.ingredientPrice;
    this.name = myIngredient.ingredientName;
    }
  }

  getIngredient(id)
  {
    var myIngredients = this.ingredients.filter(function (item) {
      return item.id == id;
    });
    var myIngredient = myIngredients[0];
    this.getIngredientByItem(myIngredient)
  }

  getIngredientByItem(ingredient: IIngredient)
  {
    if(ingredient)
    {
    this.price = ingredient.ingredientPrice;
    this.name = ingredient.ingredientName;
    }
  }

  ngOnInit() {
    this._ingredientService.getAll()
    .subscribe(ingredients => 
      {
        this.ingredients = ingredients;
        console.log(ingredients);
        if(ingredients && ingredients.length > 0)
        {
          this.getIngredient(ingredients[0].id);
        }

      },
    error => this.errorMessage = <any>error);

    this._shopService.getAll()
    .subscribe(shops => {
      this.shops = shops;
        console.log(shops);
    },
    error => this.errorMessage = <any>error);
  }


}
