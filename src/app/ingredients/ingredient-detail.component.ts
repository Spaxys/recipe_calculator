import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IngredientService } from '../services/ingredient.service';
import { HttpClient } from '@angular/common/http';
import { IIngredient } from '../interfaces/ingredient';
@Component({
  selector: 'app-ingredient-detail.component',
  templateUrl: './ingredient-detail.component.html',
  styleUrls: ['./ingredient-detail.component.css'],
  providers: [HttpClient]
})
export class IngredientDetail implements OnInit {


  constructor(private _route: ActivatedRoute, private _ingredientService: IngredientService) { 
    console.log(this._route.snapshot.paramMap.get('ingredientId'));
  }
  @Input() ingredientId: number;
    ingredient: IIngredient;
    errorMessage: any;

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('ingredientId');
    this.ingredientId = id;
    this._ingredientService.getAll()
    .subscribe(ingredients => this.ingredient = ingredients.filter(function (item) {
      return item.ingredientId === id})[0] || null,
    error => this.errorMessage = <any>error);
  }

}
