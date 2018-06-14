import { IIngredient } from '../interfaces/ingredient';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IServiceService } from './IService.service';
import { Headers } from '@angular/http';

@Injectable()
export class IngredientService implements IServiceService{
    //File url
    // private _productUrl = "./assets/json/ingredients.json";

    //Server url
    private _productUrl = "http://localhost:3000/ingredients";

  private  _httpOptions = {
    'Content-Type': 'application/json'
  };
    constructor(private _http: HttpClient) {}

    getAll(): Observable<IIngredient[]>{
        return this._http.get<IIngredient[]>(this._productUrl);
        //  .do(data => console.log('All: ' + JSON.stringify(data)));
        // .catch(this.handleError);
        
    }

    private handleError(err: HttpErrorResponse){

    }
    
    getById(id: any): Observable<any> {
        throw new Error("Method not implemented.");
    }
    post(object: IIngredient): Observable<any> {
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
        console.log("Putting: " + object);
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            })
          };
        return this._http.put(this._productUrl, JSON.stringify(object), httpOptions);
    }
    delete(id: any): Observable<any> {
        console.log("Deleting with id: " + id);
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'id': id
            })
          };
        return this._http.delete(this._productUrl + "/" + id);
    }
}