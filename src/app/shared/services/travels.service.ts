import { Injectable } from '@angular/core';
import { Travel } from '../models/travel.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { BehaviorSubject, forkJoin } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TravelsService{

  constructor(private http: HttpClient, private authService: AuthService) { }


  private allTravels = new BehaviorSubject<Travel[]>([]);

  allTravels$ = this.allTravels.asObservable()

  private travelsEnCurso = new BehaviorSubject<Travel[]>([]);
  private travelsDisponibles = new BehaviorSubject<Travel[]>([]);
  private travelsCompletes = new BehaviorSubject<Travel[]>([]);

  travelsEnCurso$ = this.travelsEnCurso.asObservable()
  travelsDisponibles$ = this.travelsDisponibles.asObservable()
  travelsCompletes$ = this.travelsCompletes.asObservable()

  private viajeDisponible: Travel[] = []
  private viajeEnCurso: Travel[] = []
  private viajeFinalizado: Travel[] = []

  private url_api: string = `${environment.URL_API}/api/Travel`;


  private getTravel(roleId: number | undefined, statusTravel: number) {
    return this.http.get<Travel[]>(`${this.url_api}/${roleId}/${statusTravel}`)
  }


  getAllTravels(idRol:number) {
    forkJoin(
      this.getTravel(idRol, 1), this.getTravel(idRol, 2), this.getTravel(idRol, 3),
      this.getTravel(idRol, 4), this.getTravel(idRol, 5), this.getTravel(idRol, 6),
      this.getTravel(idRol, 7), this.getTravel(idRol, 8), this.getTravel(idRol, 9)
    ).subscribe(
      resp => {

        let newResp: Travel[] = resp.flat()
        console.log(newResp)
        this.allTravels.next(newResp)

        for (let travel of newResp) {
          if (travel.lastStatusTravel === 1 || travel.lastStatusTravel === 5) {
            this.viajeDisponible.push(travel)
          }
          else if (travel.lastStatusTravel === 2 || travel.lastStatusTravel === 3 || travel.lastStatusTravel === 6 || travel.lastStatusTravel === 7) {
            this.viajeEnCurso.push(travel)
          }
          else if (travel.lastStatusTravel === 4 || travel.lastStatusTravel === 8 || travel.lastStatusTravel === 9) {
            this.viajeFinalizado.push(travel)
          }
        }

        this.travelsDisponibles.next(this.viajeDisponible)
        this.travelsEnCurso.next(this.viajeEnCurso)
        this.travelsCompletes.next(this.viajeFinalizado)
      }
    )
  }
}