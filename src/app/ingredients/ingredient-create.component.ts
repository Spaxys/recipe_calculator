import { Component, OnInit, Input } from '@angular/core';
import { IngredientService } from '../services/ingredient.service';

@Component({
  selector: 'app-ingredient-create.component',
  templateUrl: './ingredient-create.component.html',
  styleUrls: ['./ingredient-create.component.css']
})
export class IngredientCreateComponent implements OnInit {

  constructor(private _ingredientsService: IngredientService) { }

  ingredientName;
  ingredientDescription;
  ingredientPrice;

  create(){
    var ingredient: any = {
      ingredientName: this.ingredientName,
      ingredientDescription: this.ingredientDescription,
      ingredientPrice: this.ingredientPrice,
      // ingredientId: Math.ceil(Math.random() * 100000)
    };
    this._ingredientsService.post(ingredient).subscribe();
  }

  ngOnInit() {
  }

}
