import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError, catchError, Observable } from "rxjs";

@Injectable()

export class NetworkService {
    constructor(private http: HttpClient) {}

    public get<Res>(url: string, options?: object): Observable<Res>
    {
        return this.http
        .get<Res>(url, options)
        .pipe(catchError(e => throwError(()=> new Error(e))));
    }
}