import { IIngredient } from '../interfaces/ingredient';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IServiceService } from './IService.service';
import { Headers } from '@angular/http';

@Injectable()
export class IngredientService implements IServiceService{
    //File url
    private _productUrl = "./assets/json/ingredients.json";

    //Server url
    // private _productUrl = "http://localhost:3000/ingredients";

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
        console.log(object);
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            })
          };
        return this._http.post(this._productUrl, JSON.stringify(object), httpOptions);
        
    //     var fs = require('fs'); //File system module
    //     //If writing to the file system
    //     fs.writeFile(this._productUrl, JSON.stringify(object), function(err){
    //         if(err) {
    //          console.error(err);
    //          Observable.throw( "Failed with post" );
    //         }
    //         console.info('Successfully posted ingredient to json file');

    //     // .do(console.log(object))
    //     // .catch();
    // });
    //     return Observable.create(true);
    }
    put(id: any, object: any): Observable<any> {
        throw new Error("Method not implemented.");
    }
    delete(id: any): Observable<any> {
        throw new Error("Method not implemented.");
    }
}