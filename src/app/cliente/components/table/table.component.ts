import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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


  filter:string = ''

  page_size: number = 5;
  page_number:number = 1;
  pageSizeOptions: number[] = [5,10,15,20,50,100]

  handlePage(event: PageEvent){
    this.page_size = event.pageSize
    this.page_number = event.pageIndex + 1
  }

}
