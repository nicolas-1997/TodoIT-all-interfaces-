import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-columna',
  templateUrl: './columna.component.html',
  styleUrls: ['./columna.component.scss']
})
export class ColumnaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() fecha:string = ''
  @Input() marca:string = ''
  @Input() modelo:string = ''
  @Input() EstadoEquipo:string = ''
  @Input() EstadoEnvio:string = ''
  @Input() FechaEntrega:string = ''

  @Input() history=false
}
