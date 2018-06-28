import { Component, OnInit } from '@angular/core';
import { IngredientInShopService } from '../services/ingredientInShop.service';
import { IIngredientInShop } from '../interfaces/ingredientInShop';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../services/shop.service';
import { IngredientService } from '../services/ingredient.service';
import { IIngredient } from '../interfaces/ingredient';
import { IShop } from '../interfaces/shop';
import "rxjs/operator/do";

@Component({
  selector: 'app-ingredient-in-shop-detail',
  templateUrl: './ingredient-in-shop-detail.component.html',
  styleUrls: ['./ingredient-in-shop-detail.component.css']
})
export class IngredientInShopDetailComponent implements OnInit {

  constructor(private _service: IngredientInShopService,
    private _shopService: ShopService,
    private _ingredientService: IngredientService, 
    private _route: ActivatedRoute) { }

  ingredientInShop: IIngredientInShop;
  ingredientInShopId: number;
  errorMessage: any;

  ngOnInit() {
    debugger;
    let id = +this._route.snapshot.paramMap.get('id');
    this.ingredientInShopId = id;
    console.log(id);
    this._service.getById(id)
    .subscribe(ingredientsInShop => {
        console.log("Gotten ingredientInShop");
        this.ingredientInShop = ingredientsInShop || null;
        this._shopService.getById(this.ingredientInShop.shopId).subscribe(
          _shop => {
          console.log("Gotten shop");
            this.ingredientInShop.shopName = _shop.name;
            this._ingredientService.getById(this.ingredientInShop.ingredientId)
            .subscribe( _ingredient => {
              console.log("Gotten ingredient");
              this.ingredientInShop.ingredientName = _ingredient.ingredientName
            });
          }
        );
      },
    error => this.errorMessage = <any>error
      );

    //Get Shop and Ingredient names
    // var ingredient: IIngredient; 
    // var shop: IShop; 
    // this._ingredientService.getAll()
    // .subscribe(ingredientsInShop => 
    //   {
    //   console.log(ingredientsInShop)
    //   ingredient = ingredientsInShop.filter(function (item) {
    //   item.id === this.ingredientInShop.ingredientId})[0] || null;
    //   console.log(ingredient);
    //   return ingredient;
    //   },
    // error => this.errorMessage = <any>error);
    // this._shopService.getAll()
    // .subscribe(ingredientsInShop => shop = ingredientsInShop.filter(function (item) {
    //   return item.id === this.ingredientInShop.shopId})[0] || null,
    // error => this.errorMessage = <any>error);

    // this.ingredientInShop.shopName = shop.name;
    // this.ingredientInShop.ingredientName = ingredient.ingredientName;
  }

}
