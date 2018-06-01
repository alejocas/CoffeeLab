import { Component, ViewChild, Input } from '@angular/core';
import { Nav, Platform, NavController, MenuController } from 'ionic-angular';
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
import { Sqlite, HttpProvider, PackageProvider } from '../providers/';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Storage } from "@ionic/storage";
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
      public splashScreen: SplashScreen, public sqlite:SQLite, public dbService:Sqlite,
      private storage:Storage, private menuCtl:MenuController, private http:HttpProvider, private httpPackage:PackageProvider) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Perfil', component: ProfilePage, icon: "person" },
      { title: 'Mis Fincas', component: LandsPage, icon: "cube" },
      { title: 'Mis Lotes', component: PortionsPage, icon: "rose" },
      /*{ title: 'Configuración', component: ConfigPage, icon: "cog" }*/
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.createDataBase();
      //this.createDataBase();
      this.isUserLogin();
      
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }

  cerrarSesion(){
    this.storage.remove('currentUsuario')
    .then(data=>{
      console.log('usuario borrado');
      this.nav.setRoot(LoginPage);
     })
    .catch(err=>console.error('no se pudo borrar el usuario: ',err))
  }

  createDataBase(){
    console.log('cranado la base de datos')
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
        
        this.http.http(this.httpPackage.getTiposUsuarioPackage()).subscribe(data=>{
          console.log('------------',data);
        })

        let tipoUsuario = new TipoUsuario(null,"Dueño Finca");
        this.dbService.save(tipoUsuario);
        tipoUsuario = new TipoUsuario(null,"invitado");
        this.dbService.save(tipoUsuario);
      }
    })
    .catch(err=>console.error('findAll TipoUsuario: ',err))

    this.dbService.findAll(TipoDocumento)
    .then((data) => {
      console.log(data)      
      data as Array<any>;
      if(isArray(data) && data.length == 0){

        this.http.http(this.httpPackage.getTiposDocumentosPackage()).subscribe(data=>{
          let tipos = JSON.parse(data['_body']) as Array<TipoUsuario>;
          tipos.forEach(tipo => {
            this.dbService.save(tipo);
          });
        });

        /*let tipoUsuario = new TipoDocumento(null,"Cédula de ciudadania");
        this.dbService.save(tipoUsuario);
        tipoUsuario = new TipoDocumento(null,"Tarjeta de Identidad");
        this.dbService.save(tipoUsuario);
        tipoUsuario = new TipoDocumento(null,"Cédula extrangera");
        this.dbService.save(tipoUsuario);*/
      }
    })
    .catch(err=>console.error('findAll TipoDocumento: ',err))
    
  }


  isUserLogin(){
    this.storage.get('currentUsuario')
    .then(usuario => {
      console.log('current usuario: ',usuario);
      if(usuario != null && usuario.usuario){
        this.nav.setRoot(HomePage);
        this.menuCtl.enable(true, "menu");
      }
    })
    .catch(err => {
      console.error(err);
    });

}

  
}
