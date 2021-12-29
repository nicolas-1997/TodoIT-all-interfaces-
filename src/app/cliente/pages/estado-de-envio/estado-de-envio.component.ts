import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TravelsService } from 'src/app/shared/services/travels.service';
import { Travel } from '../../../shared/models/travel.model';
@Component({
  selector: 'app-estado-de-envio',
  templateUrl: './estado-de-envio.component.html',
  styleUrls: ['./estado-de-envio.component.scss']
})
export class EstadoDeEnvioComponent implements OnInit {

  constructor(private travelsService: TravelsService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.userLogued$.subscribe(
      rta => {
        this.clienteId = rta?.id ? rta?.id : 0
      }
    )

    this.travelsService.travelsEnCurso$.subscribe(rta => {
      for(let viaje of rta){
        if(viaje.travelEquipmentDTOs[0].equipment.clientId === this.clienteId ){
          this.myTravels.push(viaje)
        }
      }
    })
  }
  clienteId:number = 0;
  myTravels:Travel[] = []
}
