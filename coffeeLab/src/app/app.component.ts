import { Component, ViewChild, Input } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { /* paginas de inicio de sesion*/
  LoginPage, RegisterPage, ResetPage,  
  /* pagina principal y configuracion*/
  HomePage, ConfigPage,
  /* perfil */
  ProfilePage,
  /* fincas */
  LandsPage, LandPage,
  /* lotes */
  PortionsPage } from '../pages/index';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Perfil', component: ProfilePage, icon: "person" },
      { title: 'Mis Fincas', component: LandsPage, icon: "cube" },
      { title: 'Mis Lotes', component: PortionsPage, icon: "rose" },
      { title: 'Configuración', component: ConfigPage, icon: "cog" },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
