import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadeteRoutingModule } from './cadete-routing.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { LayaoutComponent } from './components/layaout/layaout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LayaoutComponent
  ],
  imports: [
    CommonModule,
    CadeteRoutingModule,
    ComponentsModule,
    PagesModule,
    SharedModule
  ],
  exports: [
    LayaoutComponent
  ]
})
export class CadeteModule { }
