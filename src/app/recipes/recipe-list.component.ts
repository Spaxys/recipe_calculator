import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../interfaces/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: []
})
export class RecipeList implements OnInit {

  constructor(private _recipesService: RecipeService) { }

  recipes: IRecipe[];
  errorMessage: any;
  // recipes: IRecipe[] = [
  // { recipeId: 1,
  //   recipeName: "Testmat",
  //  ingredients: []
  // },
  // { recipeId: 2,
  //   recipeName: "Korv Stroganoff",
  //  ingredients: []
  // },
  // { recipeId: 3,
  //   recipeName: "Chili con Carne",
  //  ingredients: []
  // },
// ]
  ngOnInit() {
    this._recipesService.getRecipes()
    .subscribe(recipes => this.recipes = recipes,
    error => this.errorMessage = <any>error);
  }

}
