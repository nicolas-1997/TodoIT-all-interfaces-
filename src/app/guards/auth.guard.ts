import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.authService.getUser().subscribe()
    return this.authService.userLogued$.pipe(
      map(
        user => {
          console.log(user)
          if (!user) {
            return true
          }
          else {
            if (user?.rol.id == 1) {
              this.router.navigate(['../admin'])
            }
            else if (user?.rol.id == 2) {
              this.router.navigate(['../cadete'])
            }
            else {
              this.router.navigate(['../cliente'])
            }
            return false
          }
        }
      )
    )

  }

}
