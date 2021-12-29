import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StatusTravelTraductorPipe } from './pipes/status-travel-traductor.pipe';
import { PaginatorPipe } from './pipes/paginator.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterViajesPipe } from './pipes/filter-viajes.pipe';


@NgModule({
  declarations: [
    StatusTravelTraductorPipe,
    PaginatorPipe,
    FilterPipe,
    FilterViajesPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    StatusTravelTraductorPipe,
    PaginatorPipe,
    FilterPipe,
    FilterViajesPipe
  ]
})
export class SharedModule { }
