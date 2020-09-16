import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { snackbarCustomConfig } from '../constants/mfa-snackbar-config';

@Injectable({
  providedIn: 'root'
})
export class MfasnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(
    message: string,
    action = '',
    config: MatSnackBarConfig<any> = snackbarCustomConfig
  ) {
    this.snackBar.open(message, action, config);
  }
}
