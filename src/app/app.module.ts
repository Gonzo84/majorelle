import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KitchensComponent } from './kitchens/kitchens.component';
import { BathroomsComponent } from './bathrooms/bathrooms.component';
import { BedroomsComponent } from './bedrooms/bedrooms.component';

@NgModule({
  declarations: [
    AppComponent,
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
