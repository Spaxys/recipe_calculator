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
import { IngredientEditComponent } from './ingredients/ingredient-edit.component';
import { IngredientDeleteComponent } from './ingredients/ingredient-delete.component';
import { ShopListComponent } from './shop/shop-list.component';
import { ShopDetailComponent } from './shop/shop-detail.component';
import { ShopCreateComponent } from './shop/shop-create.component';
import { ShopEditComponent } from './shop/shop-edit.component';
import { ShopDeleteComponent } from './shop/shop-delete.component';
import { IngredientInShopListComponent } from './ingredientInShop/ingredient-in-shop-list.component';
import { IngredientInShopDetailComponent } from './ingredientInShop/ingredient-in-shop-detail.component';
import { IngredientInShopCreateComponent } from './ingredientInShop/ingredient-in-shop-create.component';
import { IngredientInShopEditComponent } from './ingredientInShop/ingredient-in-shop-edit.component';
import { IngredientInShopDeleteComponent } from './ingredientInShop/ingredient-in-shop-delete.component';
@NgModule({
  declarations: [
    AppComponent,
    RecipeList,
    RecipeDetail,
    IngredientList,
    IngredientDetail,
    IngredientCreateComponent,
    IngredientEditComponent,
    IngredientDeleteComponent,
    ShopListComponent,
    ShopDetailComponent,
    ShopCreateComponent,
    ShopEditComponent,
    ShopDeleteComponent,
    IngredientInShopListComponent,
    IngredientInShopDetailComponent,
    IngredientInShopCreateComponent,
    IngredientInShopEditComponent,
    IngredientInShopDeleteComponent,
    ShopListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'recipes', component: RecipeList},
      { path: 'recipe/:id', component: RecipeDetail},
      { path: 'ingredients', component: IngredientList},
      { path: 'ingredient/:id', component: IngredientDetail},
      { path: 'ingredient/delete/:id', component: IngredientDeleteComponent},
      { path: 'ingredient/edit/:id', component: IngredientEditComponent},
      { path: 'ingredients/create', component: IngredientCreateComponent},
      { path: 'shops', component: ShopListComponent},
      { path: 'shops/create', component: ShopCreateComponent},
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
