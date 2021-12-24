import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
// import { LayaoutComponent } from './layaout/layaout.component';




@NgModule({
  declarations: [
    // LayaoutComponent
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    // LayaoutComponent
    CardComponent
  ]
})
export class ComponentsModule { }
