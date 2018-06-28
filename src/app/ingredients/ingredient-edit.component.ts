import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IngredientService } from '../services/ingredient.service';
import { IIngredientMapped, IIngredient } from '../interfaces/ingredient';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ingredient-edit',
  templateUrl: './ingredient-edit.component.html',
  styleUrls: ['./ingredient-edit.component.css'],
  providers: [HttpClient]
})
export class IngredientEditComponent implements OnInit {

  constructor(private _ingredientsService: IngredientService, 
    private _route: ActivatedRoute,
    private _router: Router) {    
      console.log(this._route.snapshot.paramMap.get('id'));
     }

  @Input() id;
  ingredient: IIngredient;
  errorMessage: any;

  put() {
    this._ingredientsService.put(this.ingredient.id, this.ingredient).subscribe();
    this._router.navigate(["ingredients"]);
  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.id = id;
    this._ingredientsService.getAll()
    .subscribe(ingredients => 
      {
        console.log(ingredients);
      this.ingredient =
        ingredients.filter(function (item) {
      return item.id === id})[0] || null },
    error => 
    {
    this.errorMessage = <any>error;
    console.log(this.errorMessage);
  });
    // console.log(this.ingredient);
    // this.ingredientMapped = this.ingredient;
    // this.ingredientMapped.id = this.ingredient.ingredientId;
  }

}
