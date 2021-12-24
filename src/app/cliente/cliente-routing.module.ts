import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { EstadoDeEnvioComponent } from './pages/estado-de-envio/estado-de-envio.component';
import { HistorialDeViajesComponent } from './pages/historial-de-viajes/historial-de-viajes.component';
import { HomeComponent } from './pages/home/home.component';
import { RetiroEquipoComponent } from './pages/retiro-equipo/retiro-equipo.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'solicitud-retiro',
        component: RetiroEquipoComponent
      },
      {
        path: 'estado-envio',
        component: EstadoDeEnvioComponent
      },
      {
        path: 'historial',
        component: HistorialDeViajesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
