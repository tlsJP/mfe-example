import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IframeComponent } from './iframe/iframe.component';
import * as AdminModule from 'projects/admin/src/app/app.module';
import * as DashboardModule from 'projects/dashboard/src/app/app.module';
import { ComposedComponent } from './composed/composed.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IframeComponent,
    ComposedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    AdminModule.AppModule,
    DashboardModule.AppModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
