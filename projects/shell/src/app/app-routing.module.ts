import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IframeComponent } from './iframe/iframe.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('admin/Module').then((m) => m.AppModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('dashboard/Module').then((m) => m.AppModule),
  },
  { path: '', component: HomeComponent },
  { path: 'iframe', component: IframeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
