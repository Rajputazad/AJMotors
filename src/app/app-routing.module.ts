import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BuyUseCarComponent } from './components/buy-use-car/buy-use-car.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [{path:"",redirectTo:"home",pathMatch:"full"},
{path:"",component:MainComponent,children:[
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"buy-use-cars",component:BuyUseCarComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    initialNavigation: 'enabledBlocking',
    useHash: true 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
