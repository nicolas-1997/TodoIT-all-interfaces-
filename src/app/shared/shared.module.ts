import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StatusTravelTraductorPipe } from './pipes/status-travel-traductor.pipe';


@NgModule({
  declarations: [
    StatusTravelTraductorPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    StatusTravelTraductorPipe
  ]
})
export class SharedModule { }
