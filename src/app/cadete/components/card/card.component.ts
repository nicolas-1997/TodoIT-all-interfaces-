import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TravelsService } from 'src/app/shared/services/travels.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private authService:AuthService, private travelService:TravelsService) { }

  ngOnInit(): void {
    this.authService.userLogued$.subscribe(resp => {

    })
  }
  status: 'Solicitando...' | '¡Grandioso el viaje es tuyo! :D'| '¡Perfecto! Se actualizo correctamente' | '¡Ups! ocurrio un error interno. Intentalo despues :(' | 'Ups parece que ya tienes el maximo de viajes posibles' | '' = ''
  @Input() direccion:string = ''
  @Input() estado:string = ''
  @Input() hora:string = ''
  @Input() equipo:string = ''
  @Input() cliente:string = ''
  @Input() enCurso:boolean = false

  @Input() idCadete:number = 0;
  @Input() travelId:number = 0
  @Input() statusTravel:number = 0


  state:boolean = false;

  changeState(){
    this.state = !this.state
  }



  tomarViaje(){
    this.status = 'Solicitando...'
    this.travelService.postTravels(this.travelId, this.statusTravel, this.idCadete).subscribe(
      (rta) => {
        this.status = '¡Grandioso el viaje es tuyo! :D'
      },
      (errorMsg) =>{
        this.status = errorMsg
      }
    )
  }
  actualizarViaje(){
    this.status = 'Solicitando...'
    this.travelService.postTravels(this.travelId, this.statusTravel, this.idCadete).subscribe(
      (rta) => {
        this.status = '¡Perfecto! Se actualizo correctamente'
      },
      (errorMsg) =>{
        this.status = errorMsg
      }
    )
  }
}
