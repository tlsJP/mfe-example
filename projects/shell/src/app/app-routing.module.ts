import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposedComponent } from './composed/composed.component';
import { HomeComponent } from './home/home.component';
import { IframeComponent } from './iframe/iframe.component';

const routes: Routes = [
  {
    path: 'admin',

    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        exposedModule: './Module',
      }).then((m) => m.AppModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: '',
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
        remoteEntry: 'http://localhost:3030/remoteEntry.js',
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
