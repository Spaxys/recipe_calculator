import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from '../interfaces/recipe';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-recipe-detail.component',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [HttpClient]
})
export class RecipeDetail implements OnInit {


  constructor(private _route: ActivatedRoute, private _recipesService: RecipeService) { 
    console.log(this._route.snapshot.paramMap.get('recipeId'));
  }
  @Input() recipeId: number;
    recipe: IRecipe;
    errorMessage: any;
  // recipe: IRecipe =
  //   { recipeId: 1,
  //     recipeName: "An english breakfast sandwitch",
  //    ingredients: [
  //      {
  //        ingredientId: 1,
  //        ingredientDescription: "Strawberry Jam",
  //        ingredientName: "Jam",
  //        ingredientPrice: 100
  //      },
  //      {
  //        ingredientId: 2,
  //        ingredientDescription: "Real butter",
  //        ingredientName: "Butter",
  //        ingredientPrice: 10
  //      },
  //      {
  //        ingredientId: 3,
  //        ingredientDescription: "A white sandwitch",
  //        ingredientName: "Sandwitch",
  //        ingredientPrice: 20
  //      },
  //      {
  //        ingredientId: 4,
  //        ingredientDescription: "Some fine swiss cheese",
  //        ingredientName: "Cheese",
  //        ingredientPrice: 35
  //      },
  //    ]
     
  //   };
  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('recipeId');
    this.recipeId = id;
    this._recipesService.getRecipes()
    .subscribe(recipes => this.recipe = recipes.filter(function (item) {
      return item.recipeId === id})[0] || null,
    error => this.errorMessage = <any>error);
  }

}
