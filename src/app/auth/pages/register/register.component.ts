import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/shared/models/auth.model';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  statusRegister: 'verificando' | 'Registrado con Exito' | 'Error Interno del Servidor intente mas tarde' | 'Los datos son Invalidos o El usuario ya Existe' | '' = ''


  constructor(private formbuilder: FormBuilder, private router: Router, private authService:AuthService) {

    this.registerForm = this.formbuilder.group({
      email: ['', [Validators.email, Validators.required]],
      fullName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      cellPhone: ['', [Validators.required]],
      isAccepted: true,
      isDeleted: false,
      observations: 'usuario final',
      password: ['', [Validators.required, Validators.minLength(4)]],
      vehicle: null,
      rol: {
        "id": 3,
        "name": "Usuario final",
        "isDeleted": 0
      }
    })



  }

  ngOnInit(): void {
  }

  register() {
    let resgistro:Register = this.registerForm.value;
    this.statusRegister = 'verificando';
    this.authService.registerUser(resgistro).subscribe(
      resp =>{
        this.statusRegister = 'Registrado con Exito'
      },
      (errorMsg) => {
        this.statusRegister = errorMsg;
      }
    );
  }


}
