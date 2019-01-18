import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './containers/home/home.component';
import {KitchensComponent} from './containers/kitchens/kitchens.component';
import {BathroomsComponent} from './containers/bathrooms/bathrooms.component';
import {BedroomsComponent} from './containers/bedrooms/bedrooms.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'kitchens',
  component: KitchensComponent
}, {
  path: 'bathrooms',
  component: BathroomsComponent
}, {
  path: 'bedrooms',
  component: BedroomsComponent
}, {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: '/home' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
