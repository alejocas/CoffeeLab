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
  LandsPage, LandPage, AddlandPage, ViewlandPage,
  /* lotes */
  PortionsPage } from '../pages/index';
import { Sqlite } from '../providers/sqlite/sqlite';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { TipoAbono, TipoUsuario, TipoDocumento } from "../entities/index";
import { isArray } from 'util';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any = LoginPage; //RegisterPage; //default: LoginPage

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, 
      public splashScreen: SplashScreen, public sqlite:SQLite, public dbService:Sqlite) {
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
      this.createDataBase();
      //this.createRegistersTables();
      //this.createDataBase();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }

  createDataBase(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default' // the location field is required
    })
    .then((db) => {
      this.dbService.setDatabase(db);
      return this.dbService.createTables()
      .then((data)=>{
        console.log('tablas creadas', data);
        this.createRegistersTables();
      });
    })
    .catch(error =>{
      console.error(error);
    });
  }

  createRegistersTables(){
    this.dbService.findAll(TipoUsuario)
    .then((data) => {
      console.log(data)
      data as Array<any>;
      if(isArray(data) && data.length == 0){
        let tipoUsuario = new TipoUsuario(null,"Dueño Finca");
        this.dbService.save(tipoUsuario);
        tipoUsuario = new TipoUsuario(null,"invitado");
        this.dbService.save(tipoUsuario);
      }
    })
    .catch(err=>console.error('findAll TipoUsuario: ',err))

    this.dbService.findAll(TipoUsuario)
    .then((data) => {
      console.log(data)      
      data as Array<any>;
      if(isArray(data) && data.length == 0){
        let tipoUsuario = new TipoDocumento(null,"Cédula de ciudadania");
        this.dbService.save(tipoUsuario);
        tipoUsuario = new TipoDocumento(null,"Tarjeta de Identidad");
        this.dbService.save(tipoUsuario);
        tipoUsuario = new TipoDocumento(null,"Cédula extrangera");
        this.dbService.save(tipoUsuario);
      }
    })
    .catch(err=>console.error('findAll TipoDocumento: ',err))
    
  }
}
