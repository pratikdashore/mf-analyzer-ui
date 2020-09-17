import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggerInterceptor } from './logger.interceptor';
import { ToasterInterceptor } from './toaster.interceptor';

export * from './logger.interceptor';

export const mfaInterceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: ToasterInterceptor, multi: true },
  {provide:HTTP_INTERCEPTORS,useClass: LoggerInterceptor, multi:true}
]
