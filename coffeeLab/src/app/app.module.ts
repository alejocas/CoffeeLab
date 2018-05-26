import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { 
  /* paginas de inicio de sesion*/
  LoginPage, RegisterPage, ResetPage,  
  /* pagina principal*/
  HomePage, ConfigPage,
  /* perfil */
  ProfilePage,
  /* fincas */
  LandsPage, LandPage,
  /* lotes */
  PortionsPage
} from '../pages/index';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Sqlite } from '../providers/sqlite/sqlite';
import { SQLite } from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    MyApp,
    LoginPage, RegisterPage, ResetPage,
    HomePage, ConfigPage,
    ProfilePage,
    LandsPage, LandPage,
    PortionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage, RegisterPage, ResetPage,
    HomePage, ConfigPage,
    ProfilePage,
    LandsPage, LandPage,
    PortionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Sqlite,
    SQLite
  ]
})
export class AppModule {}
