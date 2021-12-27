import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { PagesModule } from '../auth/pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PagesModule,
    SharedModule,
    ComponentsModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class AuthModule { }
