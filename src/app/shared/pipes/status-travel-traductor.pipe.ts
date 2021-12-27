import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTravelTraductor'
})
export class StatusTravelTraductorPipe implements PipeTransform {

  transform(value: number | string ): string {
    if(value == 1 || value == '1'){
      return '1: P. retiro'
    }
    else if(value == 2 || value == "2"){
      return '2: Retiro Asignado'
    }
    else if(value == 3 || value == "3"){
      return '3: Retirado'
    }
    else if(value == 4 || value == "4"){
      return '4: Pend. a Reparar'
    }
    else if(value == 5 || value == "5"){
      return '5: Reparado'
    }
    else if(value == 6 || value == "6"){
      return '6: Entrega Asignada'
    }
    else if(value == 7 || value == "7"){
      return '7: Pend. a Entrega'
    }
    else if(value == 8 || value == "8"){
      return '8: Entregado'
    }
    else if(value == 9 || value == "9"){
      return '9: Recibido'
    }
    else if(value == 10 || value == "10"){
      return '10: Cancelado'
    }
    else{
      return 'estado desconocido'
    }
  }
}
