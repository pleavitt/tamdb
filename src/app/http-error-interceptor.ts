import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
   } from '@angular/common/http';
   import { Observable } from 'rxjs';
   import { retry } from 'rxjs/operators';
   
   export class HttpErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request)
        .pipe(
          retry(1)
        )
    }
   }