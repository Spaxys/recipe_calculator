import { Component, OnInit, Input } from '@angular/core';
import { IngredientService } from '../services/ingredient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ingredient-delete',
  templateUrl: './ingredient-delete.component.html',
  styleUrls: ['./ingredient-delete.component.css']
})
export class IngredientDeleteComponent implements OnInit {

  constructor(private _ingredientsService: IngredientService, private _route: ActivatedRoute) { }

  ingredientName;
  ingredientDescription;
  ingredientPrice;
  ingredientId;
  @Input() id;

  delete() {
    this._ingredientsService.delete(this.ingredientId).subscribe();
  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('ingredientId');
    this.id = id;
    this.ingredientId = this.id;
  }

}
