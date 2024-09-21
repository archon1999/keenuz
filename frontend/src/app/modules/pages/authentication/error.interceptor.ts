import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocalStorageService } from "@shared/services/storages/local-storage.service";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private _router: Router,
    private _localStorage: LocalStorageService,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this._localStorage.get('token');
    if (token) {
      const modifiedHeaders = request.headers.append('Authorization', `Token ${token}`);
      request = request.clone({
        headers: modifiedHeaders,
        withCredentials: true,
      });
    }

    return next.handle(request).pipe(
      catchError(err => {
        if ([401, 403].indexOf(err.status) !== -1) {
          this._router.navigate(['/pages/miscellaneous/not-authorized']);
        }
        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
