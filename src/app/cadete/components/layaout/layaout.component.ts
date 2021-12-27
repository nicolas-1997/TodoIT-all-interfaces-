import { Component, OnInit } from '@angular/core';
import { filter, switchMap } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TravelsService } from 'src/app/shared/services/travels.service';
@Component({
  selector: 'app-layaout',
  templateUrl: './layaout.component.html',
  styleUrls: ['./layaout.component.scss']
})
export class LayaoutComponent implements OnInit {

  constructor(private travelService: TravelsService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.userLogued$.pipe(filter(rta => rta !== null)).subscribe(
      rta => this.travelService.getAllTravels(rta?.rol.id ? rta?.rol.id : 0)
    )


  }


  state: boolean = false;


  changeState() {
    this.state = !this.state
  }


  // stateViajes:boolean = false;


  // changeStateViajes(){
  //   this.stateViajes = !this.stateViajes
  // }
}
