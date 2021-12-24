import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() direccion:string = ''
  @Input() estado:string = ''
  @Input() hora:string = ''
  @Input() equipo:string = ''
  @Input() cliente:string = ''
  @Input() enCurso:boolean = false



  state:boolean = false;

  changeState(){
    this.state = !this.state
  }
}
