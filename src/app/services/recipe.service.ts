import { IRecipe } from '../interfaces/recipe';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IServiceService } from './IService.service';
import { BaseService } from './BaseService.service';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';


@Injectable()
export class RecipeService implements IServiceService{

    private _productUrl = "./assets/json/recipes.json";

    constructor(private _http: HttpClient) {}

    getRecipes(): Observable<IRecipe[]>{
        return this._http.get<IRecipe[]>(this._productUrl);
        //  .do(data => console.log('All: ' + JSON.stringify(data)));
        // .catch(this.handleError);
        
    }
    getAll(): Observable<IRecipe[]>{
        return this._http.get<IRecipe[]>(this._productUrl);
        //  .do(data => console.log('All: ' + JSON.stringify(data)));
        // .catch(this.handleError);
        
    }
    
    getById(id: any): Observable<any> {
        throw new Error("Method not implemented.");
    }
    post(object: any): Observable<any> {
        throw new Error("Method not implemented.");
    }
    put(id: any, object: any): Observable<any> {
        throw new Error("Method not implemented.");
    }
    delete(id: any): Observable<any> {
        throw new Error("Method not implemented.");
    }

    handleError(err: HttpErrorResponse){

    }

    ngOnInit() {
    }
}