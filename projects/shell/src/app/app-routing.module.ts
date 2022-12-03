import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposedComponent } from './composed/composed.component';
import { HomeComponent } from './home/home.component';
import { IframeComponent } from './iframe/iframe.component';

import { environment } from '../environments/environment';

const routes: Routes = [
  {
    path: 'admin',

    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: environment.adminUrl,
        exposedModule: './Module',
      }).then((m) => m.AppModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: environment.dashboardUrl,
        exposedModule: './Module',
      }).then((m) => m.AppModule),
  },
  { path: '', component: HomeComponent },
  { path: 'iframe', component: IframeComponent },
  {
    path: 'remote-module',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: environment.remoteUrl,
        exposedModule: './Module',
      }).then((m) => m.AppModule),
  },
  { path: 'composed', component: ComposedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
