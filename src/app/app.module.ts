import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from '../auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

// var config = {
//   apiKey: "AIzaSyAOdpEokYMTllHKv9sJrr_vSCRkzWkVWNs",
//   authDomain: "fitness-app-56291.firebaseapp.com",
//   databaseURL: "https://fitness-app-56291.firebaseio.com",
//   projectId: "fitness-app-56291",
//   storageBucket: "fitness-app-56291.appspot.com",
//   messagingSenderId: "878687410666"
// };
