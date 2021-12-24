import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layaout',
  templateUrl: './layaout.component.html',
  styleUrls: ['./layaout.component.scss']
})
export class LayaoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  state:boolean = false;


  changeState(){
    this.state = !this.state
  }


  // stateViajes:boolean = false;


  // changeStateViajes(){
  //   this.stateViajes = !this.stateViajes
  // }
}
