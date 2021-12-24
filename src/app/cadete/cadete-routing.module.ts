import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LayaoutComponent } from './components/layaout/layaout.component';
import { HomeComponent } from './pages/home/home.component';
import { ViajesComponent } from './pages/viajes/viajes.component';
import { ViajesEnCursoComponent } from './pages/viajes-en-curso/viajes-en-curso.component';
import { HistoryComponent } from './pages/history/history.component';
const routes: Routes = [
  {
    path: '',
    component: LayaoutComponent,
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
        path: 'viajes',
        component: ViajesComponent
      },
      {
        path: 'viajes-en-curso',
        component: ViajesEnCursoComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadeteRoutingModule { }
