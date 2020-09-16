import { ErrorHandler, Injectable } from '@angular/core';

export class MfaErrorHandler implements ErrorHandler {

  constructor() { }
  handleError(error: any): void {
    // to push exceptions to server
    console.error(error);
  }
}
