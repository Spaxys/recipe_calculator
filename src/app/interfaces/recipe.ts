import { IIngredient } from './ingredient';

export interface IRecipe {
    id: number;
    recipeName: string;
    ingredients: IIngredient[]
}