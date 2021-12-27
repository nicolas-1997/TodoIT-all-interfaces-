import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router){}
  loged:boolean = false
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.authService.getUser().subscribe()
      this.authService.userLogued$.subscribe(
        user => {
           if(user?.rol){
             if(user?.rol.id === 1){
               this.loged = true;
             }
           }
           else{
             this.router.navigate(['../home'])
             this.loged = false
           }
         }
       )

     return this.loged



  }

}
