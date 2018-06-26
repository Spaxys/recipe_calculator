import { Component } from '@angular/core';
import { RecipeService } from './services/recipe.service';
import { IngredientService } from './services/ingredient.service';
import { ShopService } from './services/shop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService, IngredientService, ShopService]
})
export class AppComponent {
  title = 'the Recipe Calculator';
}
