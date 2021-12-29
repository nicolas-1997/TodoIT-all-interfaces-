import { Pipe, PipeTransform } from '@angular/core';
import { Travel } from '../models/travel.model';

@Pipe({
  name: 'filterViajes'
})
export class FilterViajesPipe implements PipeTransform {

  transform(value:Travel[] , arg: string): Travel[]  {
    if(arg === '' || arg.length < 3) return value;
    const resultado = [];
    for(const post of value){
      if(post?.travelEquipmentDTOs[post?.travelEquipmentDTOs.length-1].equipment.mark.toLowerCase().indexOf(arg.toLowerCase()) > -1){
          resultado.push(post)
      }
      else if(post?.travelEquipmentDTOs[post?.travelEquipmentDTOs.length-1].operationDate.toString().indexOf(arg.toLowerCase()) > -1 ){
        resultado.push(post)
      }
      else if(post?.travelEquipmentDTOs[post?.travelEquipmentDTOs.length-1].equipment.model.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
        resultado.push(post)
      }
      else if(post?.travelEquipmentDTOs[post?.travelEquipmentDTOs.length -1].operationDate .toString().toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
        resultado.push(post)
      }
    }

    return resultado;
  }
}
