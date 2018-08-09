import { NgModule, ErrorHandler } from '@angular/core';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SeventhPage } from '../pages/seventh/seventh'; 

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
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SeventhPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    NgxErrorsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SeventhPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
