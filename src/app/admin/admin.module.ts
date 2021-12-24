import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { QuicklinkModule } from 'ngx-quicklink';
import { LayaoutComponent } from './components/layaout/layaout.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    LayaoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    QuicklinkModule,
    PagesModule
  ]
})
export class AdminModule { }
