import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { KitchensComponent } from './containers/kitchens/kitchens.component';
import { BathroomsComponent } from './containers/bathrooms/bathrooms.component';
import { BedroomsComponent } from './containers/bedrooms/bedrooms.component';
import {AppFooterComponent} from './components/footer/footer';

@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    HomeComponent,
    KitchensComponent,
    BathroomsComponent,
    BedroomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
