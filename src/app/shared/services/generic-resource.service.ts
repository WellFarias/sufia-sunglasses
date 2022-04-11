import { GenericResourceModel } from '../models/generic-resource.model';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injector } from '@angular/core';
import { environment } from 'src/environments/environment';

export abstract class GenericResouceService<T extends GenericResourceModel> {

    protected http: HttpClient;
    protected endpoint = environment.baseUrl;

    constructor(
        protected apiPath: string,
        protected injector: Injector,
        protected jsonDataToResourceFunc: (jsonData: any) => T
        ) {
        this.http = injector.get(HttpClient);
    }

    getAll(): Observable<T[]> {
        return this.http.get(this.endpoint + this.apiPath).pipe(
        map(this.jsonDataToResources.bind(this)),
        catchError(this.handleError)
        );
    }

    getById(id: string): Observable<T> {
        const url = `${this.endpoint + this.apiPath}/${id}`;
        return this.http.get(url).pipe(
            map(this.jsonDataToResource.bind(this)),
            catchError(this.handleError)
        );
    }

    create(resource: T): Observable<T> {
        return this.http.post(this.endpoint + this.apiPath, resource).pipe(
            map(this.jsonDataToResource.bind(this)),
            catchError(this.handleError)
        );
    }

    update(resource: T): Observable<T> {
        const url = `${this.endpoint + this.apiPath}/${resource.id}`;
        return this.http.put(url, resource).pipe(
            map(() => resource),
            catchError(this.handleError)
        );
    }

    delete(id: string): Observable<any> {
        const url = `${this.endpoint + this.apiPath}/${id}`;
        return this.http.delete(url).pipe(
            map(() => null),
            catchError(this.handleError)
        );
    }

    protected jsonDataToResources(jsonData: any[]): T[] {
        const resources: T[] = [];
        jsonData.forEach(element => resources.push(this.jsonDataToResourceFunc(element)));
        return resources;
    }

    protected jsonDataToResource(jsonData: any): T {
        return this.jsonDataToResourceFunc(jsonData);
    }

    protected handleError(error: any): Observable<any>{
        console.log('ERRO NA REQUISIÇÃO => ', error);
        return throwError(error);
    }
}
