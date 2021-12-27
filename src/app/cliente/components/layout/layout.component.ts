import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TravelsService } from '../../../shared/services/travels.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private travelService:TravelsService, private authService:AuthService) { }

  ngOnInit(): void {
   this.travelService.getAllTravels(1)
  }


  state:boolean = false



  changeState(){
    this.state = !this.state
  }
}
