import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { RecipeList } from './recipes/recipe-list.component';
import { RecipeDetail } from './recipes/recipe-detail.component';
import { IngredientList } from './ingredients/ingredient-list.component';
import { IngredientDetail } from './ingredients/ingredient-detail.component';
import { IIngredient } from './interfaces/ingredient';
import { IngredientCreateComponent } from './ingredients/ingredient-create.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeList,
    RecipeDetail,
    IngredientList,
    IngredientDetail,
    IngredientCreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'recipes', component: RecipeList},
      { path: 'recipe/:recipeId', component: RecipeDetail},
      { path: 'ingredients', component: IngredientList},
      { path: 'ingredient/:ingredientId', component: IngredientDetail},
      { path: 'ingredients/create', component: IngredientCreateComponent},
      { path: 'welcome', component: RecipeList},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', component: RecipeList},
      ],
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
