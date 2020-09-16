import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    let status = 'Failed';
    return next.handle(req).pipe(
      tap(event => status = event instanceof HttpResponse ? 'Succeeded' : status),
      finalize(() => {
        const elapsed = Date.now() - started;
        console.log(`Request for ${req.urlWithParams} ${status} in ${elapsed} ms.`);
      })
    );
  }
}
