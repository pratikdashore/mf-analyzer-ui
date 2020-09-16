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

  public getForEntity<R>(url: string, params?: any): Observable<R> {
    const absoluteUrl = this.getAbsoluteUrl(url);
    const httpParms = this.constructParams(params);
    const options = {
      ...this.httpOptions,
      params: httpParms,
    };
    return this.httpClient.get<Response>(absoluteUrl, options).pipe(
      map((response: Response) => {
        if (response.responseType === ResponseType.SUCCESS && response.data !== undefined) {
          return <R>response.data;
        }
        throw observableThrowError(response);
      })
    );
  }

}
