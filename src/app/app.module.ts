import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

import {FlexLayoutModule} from '@angular/flex-layout';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {AppFooterComponent} from './components/footer/footer';
import {BathroomsComponent} from './containers/bathrooms/bathrooms.component';
import {BedroomsComponent} from './containers/bedrooms/bedrooms.component';
import {HomeComponent} from './containers/home/home.component';
import {KitchensComponent} from './containers/kitchens/kitchens.component';
import {NewsCardComponent} from './components/news-card/news-card';
import { LivingroomsComponent } from './containers/livingrooms/livingrooms.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    BathroomsComponent,
    BedroomsComponent,
    HomeComponent,
    KitchensComponent,
    NewsCardComponent,
    LivingroomsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    MaterialModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
