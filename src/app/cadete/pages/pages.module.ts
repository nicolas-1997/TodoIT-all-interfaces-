import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ViajesComponent } from './viajes/viajes.component';
import { ComponentsModule } from '../components/components.module';
import { ViajesEnCursoComponent } from './viajes-en-curso/viajes-en-curso.component';
import { HistoryComponent } from './history/history.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    ViajesComponent,
    ViajesEnCursoComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    ViajesComponent,
    ViajesEnCursoComponent
  ]
})
export class PagesModule { }
