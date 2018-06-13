import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface IServiceService {
    getAll(): Observable<any>;
    getById(id: any): Observable<any>;
}