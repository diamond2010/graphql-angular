import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApiModule } from '@graphql/model';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, ApiModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
