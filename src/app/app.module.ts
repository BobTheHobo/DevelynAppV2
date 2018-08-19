import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SeventhPage } from '../pages/seventh/seventh'; 
import { SportsPage } from '../pages/sports/sports';
import { SettingsPage } from '../pages/settings/settings';
import { SportsListComponent } from '../components/sports-list/sports-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'; 


var config = {
  apiKey: "AIzaSyDj0R1moaXcx5i4f_uraNwvG0yJMb3gttg",
  authDomain: "school-app-ecd39.firebaseapp.com",
  databaseURL: "https://school-app-ecd39.firebaseio.com",
  projectId: "school-app-ecd39",
  storageBucket: "school-app-ecd39.appspot.com",
  messagingSenderId: "868266531907"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    SeventhPage,
    SportsPage,
    SettingsPage,
    SportsListComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    SeventhPage,
    SportsPage,
    SettingsPage,
    SportsListComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
