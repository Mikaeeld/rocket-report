import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError, catchError } from "rxjs";

@Injectable()

export class NetworkService {
    constructor(private http: HttpClient) {}

    public get<Res>(url: string, options?:any)
    {
        return this.http
        .get<Res>(url, options)
        .pipe(catchError(e => throwError(()=> new Error(e))));
    }
}