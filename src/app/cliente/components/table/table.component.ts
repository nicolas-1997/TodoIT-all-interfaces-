import { Component, Input, OnInit } from '@angular/core';
import { Travel } from '../../../shared/models/travel.model';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(this.title == 'Estado de Viajes'){
      this.columnas = ['Fecha', 'Marca', 'Modelo', 'E. Equipo', 'E. Envio']
    }
    else{
      this.columnas = ['Fecha', 'Marca', 'Modelo', 'E. Equipo', 'E. Envio', 'Entrega']
    }
  }

  @Input() title = ''
  columnas:string[] = []
  @Input() tableInfo:Travel[] = []
  @Input() history= false

}
