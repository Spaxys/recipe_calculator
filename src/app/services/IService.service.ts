import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IServiceService {
    getAll(): Observable<any>;
    getById(id: any): Observable<any>;
    post(object: any): Observable<any>;
    put(id: any, object: any): Observable<any>;
    delete(id: any): Observable<any>;
}