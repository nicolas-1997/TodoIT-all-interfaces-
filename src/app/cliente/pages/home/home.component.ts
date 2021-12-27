import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.userLogued$.subscribe(rta => {
      this.name = rta?.fullName ? rta.fullName : ''
    })
  }

  name:string = ''



}
