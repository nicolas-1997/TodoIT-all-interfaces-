import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TravelsService } from 'src/app/shared/services/travels.service';
import { Travel } from '../../../shared/models/travel.model';
@Component({
  selector: 'app-historial-de-viajes',
  templateUrl: './historial-de-viajes.component.html',
  styleUrls: ['./historial-de-viajes.component.scss']
})
export class HistorialDeViajesComponent implements OnInit {

  constructor(private travelsService: TravelsService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.userLogued$.subscribe(
      rta => {
        this.clienteId = rta?.id ? rta?.id : 0
      }
    )

    this.travelsService.travelsCompletes$.subscribe(rta => {

      for(let viaje of rta){
        if (viaje.lastStatusTravel !== 4) {
          if(viaje.travelEquipmentDTOs[0].equipment.cliente.id === this.clienteId ){
            this.myHistory.push(viaje)
          }
        }
      }
    })
  }
  clienteId:number = 0;
  myHistory:Travel[] = []
}
