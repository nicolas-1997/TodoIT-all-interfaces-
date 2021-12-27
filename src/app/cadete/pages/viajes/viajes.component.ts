import { Component, OnInit } from '@angular/core';
import { TravelsService } from 'src/app/shared/services/travels.service';
import { Travel } from '../../../shared/models/travel.model';
@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss']
})
export class ViajesComponent implements OnInit {

  constructor(private travelService:TravelsService) { }

  ngOnInit(): void {
    this.travelService.travelsDisponibles$.subscribe(
      resp  => this.travels.push(...resp)
    )
  }

  travels:Travel [] = []




}
