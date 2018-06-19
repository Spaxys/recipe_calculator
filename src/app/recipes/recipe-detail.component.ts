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
    console.log(this._route.snapshot.paramMap.get('id'));
  }
  @Input() id: number;
    recipe: IRecipe;
    errorMessage: any;
  ngOnInit() {
    debugger;
    let id = +this._route.snapshot.paramMap.get('id');
    this.id = id;
    this._recipesService.getRecipes()
    .subscribe(recipes => this.recipe = recipes.filter(function (item) {
      return item.id === id})[0] || null,
    error => this.errorMessage = <any>error);
  }

}
