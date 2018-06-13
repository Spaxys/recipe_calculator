import { IRecipe } from '../interfaces/recipe';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IServiceService } from './IService.service';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';


@Injectable()
export abstract class BaseService implements IServiceService{
    abstract _productUrl = "foo";
    abstract _http;

    // abstract constructor(private _http: HttpClient);

    abstract getAll(): Observable<IRecipe[]>;
    abstract getById(id: any): Observable<any>;
    abstract post(object: any): Observable<any>;
    abstract put(id: any, object: any): Observable<any>;
    abstract delete(id: any): Observable<any>;

    abstract handleError(err: HttpErrorResponse);
}