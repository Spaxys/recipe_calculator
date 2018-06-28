import { IIngredientInShop } from '../interfaces/ingredientInShop';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IServiceService } from './IService.service';
import { Headers } from '@angular/http';

@Injectable()
export class IngredientInShopService implements IServiceService{
    //File url
    // private _productUrl = "./assets/json/ingredientInShops.json";

    //Server url
    private _productUrl = "http://localhost:3000/ingredientsinshops";

  private  _httpOptions = {
    'Content-Type': 'application/json'
  };
    constructor(private _http: HttpClient) {}

    getAll(): Observable<any>{
        return this._http.get<any>(this._productUrl);
        //  .do(data => console.log('All: ' + JSON.stringify(data)));
        // .catch(this.handleError);
        
    }

    private handleError(err: HttpErrorResponse){

    }
    
    getById(id: any): Observable<any> {
        throw new Error("Method not implemented.");
    }
    post(object: IIngredientInShop): Observable<any> {
        //If using the http clienct
        console.log("Posting: " + object);
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            })
          };
        return this._http.post(this._productUrl, JSON.stringify(object), httpOptions);
    }
    put(id: any, object: any): Observable<any> {
        console.log("Putting: " + JSON.stringify(object));
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            })
          };
        return this._http.put(this._productUrl + "/" + id, JSON.stringify(object), httpOptions);
    }
    delete(id: any): Observable<any> {
        console.log("Deleting with id: " + id);
        var urlToCall = this._productUrl + "/" + id;
        console.log("Url to call: " + urlToCall)
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            }),
            params: new HttpParams({
        }).append(
            'id',
            id
        )
          };
        return this._http.delete(urlToCall, httpOptions);
    }
}