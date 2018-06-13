import { Component, OnInit } from '@angular/core';
import { IIngredient } from '../interfaces/ingredient';
import { IngredientService } from '../services/ingredient.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css'],
  providers: [HttpClient]
})
export class IngredientList implements OnInit {

  constructor(private _ingredientsService: IngredientService) { }

  ingredients: IIngredient[];
  errorMessage: any;
  ngOnInit() {
    this._ingredientsService.getAll()
    .subscribe(ingredients => this.ingredients = ingredients,
    error => this.errorMessage = <any>error);
  }

}
