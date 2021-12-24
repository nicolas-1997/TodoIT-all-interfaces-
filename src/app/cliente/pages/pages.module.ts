import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RetiroEquipoComponent } from './retiro-equipo/retiro-equipo.component';
import { ComponentsModule } from '../components/components.module';
import { EstadoDeEnvioComponent } from './estado-de-envio/estado-de-envio.component';
import { HistorialDeViajesComponent } from './historial-de-viajes/historial-de-viajes.component';


@NgModule({
  declarations: [
    HomeComponent,
    RetiroEquipoComponent,
    EstadoDeEnvioComponent,
    HistorialDeViajesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent,
    RetiroEquipoComponent,
    EstadoDeEnvioComponent,
    HistorialDeViajesComponent
  ]
})
export class PagesModule { }
