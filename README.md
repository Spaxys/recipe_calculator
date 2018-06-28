# RecipeCalculator

## This is a recipe calculator.

In order to run this application in this current version, you need to communicate with a data server, in my case an instance of json-server.
This is hosted locally at http://localhost:3000, and that is where the application is expecting to find the data server.

How to setup the json-server:
https://github.com/typicode/json-server


The server contains lists of the following object types:

export interface IIngredient {
    id: number;
    // ingredientId: number;
    ingredientName: string;
    ingredientDescription: string;
    ingredientPrice: number;
}

export interface IIngredientInShop {
    id: number;
    ingredientId: number;
    ingredientName: string;
    shopId: number;
    shopName: string;
    name: string;
    price: string;
    unit: string;
    quantity: string;
}

export interface IRecipe {
    id: number;
    recipeName: string;
    ingredients: IIngredient[]
}


export interface IShop {
    id: number;
    name: string;
    shopChainName: string;
    shopChainId: number;
}










#Boring standard Angular stuff

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
