import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-columna',
  templateUrl: './columna.component.html',
  styleUrls: ['./columna.component.scss']
})
export class ColumnaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  column:string[] = ['21-02-12', 'Apple', 'Mc Pro', 'Reparado', 'Entregado', '21-02-13']

}
