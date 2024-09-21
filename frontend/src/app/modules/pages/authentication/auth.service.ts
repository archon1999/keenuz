import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, of, switchMap, tap } from 'rxjs';
import { User } from '@app/modules/pages/authentication/user';
import { ApiService } from '@shared/services/api.service';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { catchError } from "rxjs/operators";
import { LocalStorageService } from "@shared/services/storages/local-storage.service";

@Injectable({ providedIn: 'root' })
export class AuthService {
  protected _http = inject(HttpClient);
  private currentUserSubject = new BehaviorSubject<User>(null);
  public currentUser = this.currentUserSubject.asObservable();
  private localStorageService = inject(LocalStorageService);
  constructor(private api: ApiService) {}

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  public get currentUserRole() {
    return this.currentUserValue?.role;
  }
  getMe() {
    return this.api.get('me').pipe(
      tap((user: User) => {
        if (user) {
          this.currentUserSubject.next(user);
        } else {
          this.currentUserSubject.next(null);
        }
      }),
      catchError(err => of(null))
    );
  }

  login(username: string, password: string) {
    return this._http
      .post<any>(`${environment.apiUrl}/api-token-auth/`, { username, password })
      .pipe(
        tap(({ token }) => this.localStorageService.set('token', token)),
        switchMap(() => this.getMe())
      );
  }

  logout() {
    this.localStorageService.remove('token');
    this.currentUserSubject.next(null);
  }

}
