import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/shared/models/travel.model';
import { TravelsService } from 'src/app/shared/services/travels.service';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private travelService:TravelsService, private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.userLogued$.subscribe(resp => {
      this.userID = resp?.id ? resp.id : 0
    })
    this.travelService.travelsCompletes$.subscribe( resp => {
      this.travels.push(...resp)
    })

  }
  travels:Travel [] = []
  userID = 0
}
