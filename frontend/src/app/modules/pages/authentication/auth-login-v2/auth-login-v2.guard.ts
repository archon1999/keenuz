import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "@app/modules/pages/authentication/auth.service";
import { Observable, of } from "rxjs";

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/home'], { skipLocationChange: true });
    }
    return of(true);
  }
}
