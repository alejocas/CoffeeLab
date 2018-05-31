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
  LandsPage, LandPage, AddlandPage, ViewlandPage,
  /* lotes */
  PortionsPage
} from '../pages/index';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite';
import { IonicStorageModule } from "@ionic/storage";

import { Sqlite, UsuarioProvider } from '../providers';


@NgModule({
  declarations: [
    MyApp,
    LoginPage, RegisterPage, ResetPage,
    HomePage, ConfigPage,
    ProfilePage,
    LandsPage, LandPage,
    PortionsPage,
    AddlandPage, ViewlandPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage, RegisterPage, ResetPage,
    HomePage, ConfigPage,
    ProfilePage,
    LandsPage, LandPage,
    PortionsPage,
    AddlandPage, ViewlandPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Sqlite,
    SQLite,
    UsuarioProvider
  ]
})
export class AppModule {}
