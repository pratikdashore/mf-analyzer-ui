import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response, ResponseType } from "../models";

@Injectable({
  providedIn: 'root'
})
export class MfaHttpService {
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  constructParams(params: any): HttpParams {
    const httpParams = new HttpParams();
    for (const property in params) {
      if (params.hasOwnProperty(property)) {
        httpParams.set(property, params[property]);
      }
    }
    return params;
  }

  private getAbsoluteUrl(relativeUrl: string): string {
    return relativeUrl;
  }

  /* The idea was to implement backend as well but since there was not enough time, calling it direct url,
     this method will be standard method, which will communicate to server and server will always return Response object which will contain status, data and error ///message if any.
  */


  public getForEntity<R>(url: string, params?: any): Observable<R> {
    const absoluteUrl = this.getAbsoluteUrl(url);
    const httpParms = this.constructParams(params);
    const options = {
      ...this.httpOptions,
      params: httpParms,
    };
    return this.httpClient.get<Response>(absoluteUrl, options).pipe(
      map((response: Response) => {
        if (response.status === ResponseType.SUCCESS && response.data !== undefined) {
          return <R>response.data;
        }
        throw observableThrowError(response);
      })
    );
  }

  public get(url: string, params?: any): Observable<Response> {
    const absoluteUrl = this.getAbsoluteUrl(url);
    const httpParms = this.constructParams(params);
    const options = {
      ...this.httpOptions,
      params: httpParms,
    };
    return this.httpClient.get<Response>(absoluteUrl, options);
  }

}
