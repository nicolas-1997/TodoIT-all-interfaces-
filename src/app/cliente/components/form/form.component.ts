import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TravelsService } from 'src/app/shared/services/travels.service';
import { SolicitarViaje } from '../../../shared/models/travel.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  solicitarViajeForm:FormGroup
  status: 'solicitando' | 'Solicitud Exitosa' | 'Error Interno del Servidor intente mas tarde' | 'Hubo un error con los datos' | 'Ups algo salio mal :(' | '' = ''


  constructor(private formbuilder: FormBuilder, private router: Router, private authService:AuthService, private travelService:TravelsService) {
    this.solicitarViajeForm = this.formbuilder.group({
      mark: ['', [Validators.required, Validators.minLength(3)]],
      model: ['', [Validators.required, Validators.minLength(3)]],
      failure: ['', [Validators.required, Validators.minLength(3)]]
    })

  }

  idCliente:number = 0

  ngOnInit(): void {
    this.authService.userLogued$.subscribe(rta => {
      this.idCliente = rta?.id ? rta.id : 0
    })
  }


  solicitar(){
    this.status = 'solicitando'

    let solicitarViajeData:SolicitarViaje = {
      'failure': this.solicitarViajeForm.value.failure,
      'mark': this.solicitarViajeForm.value.mark,
      'model': this.solicitarViajeForm.value.model,
      'idCliente': this.idCliente
    }

    console.log(solicitarViajeData)

    this.travelService.solicitarRetiro(solicitarViajeData).subscribe(
      (rta) => {
        this.status = 'Solicitud Exitosa'
        console.log(rta)
      },
      (errorMsg) => {
        this.status = errorMsg
        console.log(errorMsg)
      }
    )

  }
}
