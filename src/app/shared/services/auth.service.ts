import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Login, Register } from '../models/auth.model';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient, private router:Router) {

  }

  private api_url:string = `${environment.URL_API}`;

  private user = new BehaviorSubject<User | null>(null);
  userLogued$ = this.user.asObservable();

  loginAuth(dto:Login){
    return this.http.get<User>(`${this.api_url}/api/Login?email=${dto.email}&password=${dto.password}`).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status == HttpStatusCode.Forbidden){
          return throwError('El usuario es incorrecto o no existe')
        }
        else if (error.status == HttpStatusCode.InternalServerError){
          return throwError('Error Interno del Servidor intente mas tarde')
        }
        else{
          return throwError('¡Ups algo salio mal! :( ')

        }
      })
    )
  }

  saveUser(id:number){
    localStorage.setItem("userLogued", JSON.stringify(id));
  }

  getIdLS(){
    let getLocalStorage =  localStorage.getItem("userLogued");
    let id:number = JSON.parse(`${getLocalStorage}`);

    return id
  }

  getUser(){
    let id = this.getIdLS()
    return this.http.get<User>(`${this.api_url}/api/Users/${id}?userOperation=1`)
    .pipe(
      tap(user => {
        this.user.next(user)
      })

    )
  }



  registerUser(dto:Register){
    return this.http.post<Register>(`${this.api_url}/api/Users`,dto).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status == 403){
          return throwError( 'Los datos son Invalidos o El usuario ya Existe')
        }
        else if (error.status == HttpStatusCode.InternalServerError){
          return throwError('Error Interno del Servidor intente mas tarde')
        }
        else{
          return throwError('¡Ups algo salio mal! :( ')

        }
      })
    )
  }
}
