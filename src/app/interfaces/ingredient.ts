export interface IIngredient {
    id: number;
    // ingredientId: number;
    ingredientName: string;
    ingredientDescription: string;
    ingredientPrice: number;
}

export interface IIngredientMapped {
    id: number,
    ingredientId: number;
    ingredientName: string;
    ingredientDescription: string;
    ingredientPrice: number;
}