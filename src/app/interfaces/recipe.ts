import { IIngredient } from './ingredient';

export interface IRecipe {
    recipeId: number;
    recipeName: string;
    ingredients: IIngredient[]
}