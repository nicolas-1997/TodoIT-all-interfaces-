import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Todo IT';

  constructor(private authService:AuthService) {}

  ngOnInit(): void {
    let id = this.authService.getIdLS()
    if(id){
      this.authService.getUser().subscribe(
        rta => console.log(rta)
      )
    }
  }
}
