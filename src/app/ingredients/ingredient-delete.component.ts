import { Component, OnInit, Input } from '@angular/core';
import { IngredientService } from '../services/ingredient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ingredient-delete',
  templateUrl: './ingredient-delete.component.html',
  styleUrls: ['./ingredient-delete.component.css']
})
export class IngredientDeleteComponent implements OnInit {

  constructor(private _ingredientsService: IngredientService, private _route: ActivatedRoute,
  private _router: Router) { }

  ingredientName;
  ingredientDescription;
  ingredientPrice;
  @Input() id;

  delete() {
    this._ingredientsService.delete(this.id).subscribe();
    this._router.navigate(["ingredients"]);
  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.id = id;
  }

}
