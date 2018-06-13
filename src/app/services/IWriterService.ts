import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface IServiceService {
    post(object: any): Observable<any>;
    put(id: any, object: any): Observable<any>;
    delete(id: any): Observable<any>;
}