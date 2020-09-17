import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { MfaErrorHandler } from './utils';
import { mfaInterceptors } from './interceptors';
import { HeaderComponent } from '../core/components';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterComponent } from '../core/components/router/router.component';


@NgModule({
  declarations: [HeaderComponent, RouterComponent],
  imports: [
    CommonModule,
    HttpClientModule,

    MatToolbarModule,
    MatSidenavModule,
    MatSnackBarModule
  ],
  providers: [mfaInterceptors, { provide: ErrorHandler, useClass: MfaErrorHandler }],
  exports: [HeaderComponent, RouterComponent]
})
export class CoreModule { }
