import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';

import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from '../shared/shared.module';

import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    PagesModule,
    ComponentsModule,
    SharedModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class ClienteModule { }
