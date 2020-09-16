import {
  HttpErrorResponse, HttpEvent, HttpHandler,
  HttpInterceptor, HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Response } from "../models";
import { MfasnackbarService } from '../services';

@Injectable()
export class ToasterInterceptor implements HttpInterceptor {


  constructor(private snackbarService: MfasnackbarService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let ok: boolean;
    let response: HttpResponse<Response>;
    let err: HttpErrorResponse;

    return next.handle(request).pipe(
      tap(
        // Succeeds when there is a response; ignore other events
        event => {
          ok = event instanceof HttpResponse;
          if (ok) {
            response = <HttpResponse<Response>>event;
          }
        },
        // Operation failed; error is an HttpErrorResponse
        error => {
          ok = false;
          err = error;
        }
      ),
      // toaster when response observable either completes or errors
      finalize(() => {
        if (ok) {
          this.handleSuccess(response);
        } else {
          this.handleError(err);
        }
      })
    );
  }
  handleSuccess(event: HttpResponse<Response>) {
    const response = event.body;
    if (response && response.msg) {
      this.snackbarService.openSnackBar(response.msg);
    }

  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      this.snackbarService.openSnackBar(error.error.message);
    } else {
      this.snackbarService.openSnackBar('Error completing the request, please try again.');
    }
    return throwError(error);
  }
}
