import { Component } from '@angular/core';
import { RecipeService } from './services/recipe.service';
import { IngredientService } from './services/ingredient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService, IngredientService]
})
export class AppComponent {
  title = 'the Recipe Calculator';
}
