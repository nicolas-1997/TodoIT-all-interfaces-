import { Injectable } from '@angular/core';
import { Travel, SolicitarViaje } from '../models/travel.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { AuthService } from './auth.service';
import { BehaviorSubject, forkJoin, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
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

  private url_api: string = `${environment.URL_API}`;





  private getTravel(roleId: number | undefined, statusTravel: number) {
    return this.http.get<Travel[]>(`${this.url_api}/api/Travel/${roleId}/${statusTravel}`)
  }


  getAllTravels(idRol:number) {
    forkJoin(
      this.getTravel(idRol, 1), this.getTravel(idRol, 2), this.getTravel(idRol, 3),
      this.getTravel(idRol, 4), this.getTravel(idRol, 5), this.getTravel(idRol, 6),
      this.getTravel(idRol, 7), this.getTravel(idRol, 8), this.getTravel(idRol, 9)
    ).subscribe(
      resp => {

        let newResp: Travel[] = resp.flat()
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

  solicitarRetiro(body:SolicitarViaje){
    return this.http.post(`${this.url_api}/api/Retirement?clientId=${body.idCliente}&mark=${body.mark}&model=${body.model}&failure=${body.failure}`, body)
    .pipe(
      catchError((error: HttpErrorResponse) =>{
        if(error.status == 403){
          return throwError('Hubo un error con los datos')
        }
        else if (error.status == HttpStatusCode.InternalServerError){
          return throwError('Error Interno del Servidor intente mas tarde')
        }
        else{
          return throwError('Ups algo salio mal :(')
        }
      })
    )
  }


  postTravels(travelId:number, statusTravel:number, idCadete:number){
    return this.http.post<Travel>(`${this.url_api}/api/Travel?travelId=${travelId}&statusTravel=${statusTravel + 1}&userOperation=2&cadeteId=${idCadete}&isReasigned=false`,[travelId, statusTravel]).pipe(
      catchError((error:HttpErrorResponse) => {
        if (error.status == HttpStatusCode.Forbidden) {
          return 'Ups parece que ya tienes el maximo de viajes posibles'
        }
        else {
          return '¡Ups! ocurrio un error interno. Intentalo despues :('
        }

      })
    )
  }
}
