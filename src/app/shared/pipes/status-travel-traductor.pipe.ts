import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTravelTraductor'
})
export class StatusTravelTraductorPipe implements PipeTransform {

  transform(value: number | string ): string {
    if(value == 1 || value == '1'){
      return 'P. retiro'
    }
    else if(value == 2 || value == "2"){
      return 'Retiro Asignado'
    }
    else if(value == 3 || value == "3"){
      return 'Retirado'
    }
    else if(value == 4 || value == "4"){
      return 'Pend. a Reparar'
    }
    else if(value == 5 || value == "5"){
      return 'Reparado'
    }
    else if(value == 6 || value == "6"){
      return 'Entrega Asignada'
    }
    else if(value == 7 || value == "7"){
      return 'Pend. a Entrega'
    }
    else if(value == 8 || value == "8"){
      return 'Entregado'
    }
    else if(value == 9 || value == "9"){
      return 'Recibido'
    }
    else if(value == 10 || value == "10"){
      return 'Cancelado'
    }
    else{
      return 'estado desconocido'
    }
  }
}
