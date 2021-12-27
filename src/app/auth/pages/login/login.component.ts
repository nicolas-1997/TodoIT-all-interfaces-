import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/models/auth.model';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login:FormGroup

  loginValue:Login = {
    email: '',
    password: ''
  }

  statusLogin: 'verificando' | 'login' | 'El usuario es incorrecto o no existe' | 'Error Interno del Servidor intente mas tarde' | '¡Ups algo salio mal! :( '| '' = ''

  constructor(private formbuilder: FormBuilder, private router: Router, private authService:AuthService) {
    this.login = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  ngOnInit(): void {
  }


  loginData(){
    this.statusLogin = 'verificando'
    this.loginValue.email = this.login.value.email;
    this.loginValue.password = this.login.value.password

    this.authService.loginAuth(this.loginValue).subscribe( (resp) => {
      this.statusLogin = 'login'
      this.authService.saveUser(resp.id)
      this.authService.getUser().subscribe()

      if(resp.rol.id == 1){
        this.router.navigate(['../admin'])
      }
      else if(resp.rol.id == 2){
        this.router.navigate(['../cadete'])
      }
      else if(resp.rol.id == 3){
        this.router.navigate(['../cliente'])
      }

    },
    (errorMsg) => {
      this.statusLogin = errorMsg
    }
    )
  }
}
