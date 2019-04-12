import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { AccountComponent } from './account/account.component';
import { BasketComponent } from './basket/basket.component';


=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> peopleLogicTwo

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    BasketComponent
    ],
  entryComponents: [],
<<<<<<< HEAD

  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule
  ],
=======
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
>>>>>>> peopleLogicTwo
  providers: [
    StatusBar,
    NetworkInterface,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
