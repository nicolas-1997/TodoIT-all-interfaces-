import { Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthCadeteGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {

      return this.authService.userLogued$.pipe(
        map(
          rta => {
            if(rta?.rol !== null){
              if (rta?.rol.id == 2) {
                return true
              }
              else{
                return false
              }
            }
            else{
              return false
            }
          }
        )
      )
     }
}
