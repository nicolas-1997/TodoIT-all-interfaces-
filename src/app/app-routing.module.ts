import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: 'website',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule)
  },
  {
    path: 'cadete',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./cadete/cadete.module').then(m => m.CadeteModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy:QuicklinkStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
