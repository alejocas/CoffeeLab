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
  LandsPage, LandPage, AddlandPage,
  /* lotes */
  PortionsPage, PortionPage } from '../pages/index';
import { Sqlite, HttpProvider, PackageProvider } from '../providers/';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Storage } from "@ionic/storage";
import { TipoAbono, TipoUsuario, TipoDocumento, TipoClima, TipoSemilla, Abono, Pais, Departamento, Municipio, Finca } from "../entities/index";
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

    let finca = new Finca(1,'LA AURORA',19,1900,new Municipio(1),new TipoClima(1));

    this.dbService.save(finca);

    this.storage.set('currentFinca',finca);

    /* TIPO USUARIO */
    this.dbService.findAll(TipoUsuario)
    .then((data) => {
      if(data.length == 0){
        this.http.http(this.httpPackage.getTiposUsuarioPackage()).subscribe(data=>{
          let tipos = JSON.parse(data['_body']) as Array<TipoUsuario>;

          tipos.forEach(tipo => {
            this.dbService.save(new TipoUsuario(tipo.codigo,tipo.nombre,tipo.descripcion));
          });
        });

      }
    })
    .catch(err=>console.error('findAll TipoUsuario: ',err))

    /* TIPO DOCUMENTO */
    this.dbService.findAll(TipoDocumento)
    .then((data) => {

      if(isArray(data) && data.length == 0){

        this.http.http(this.httpPackage.getTiposDocumentosPackage()).subscribe(data=>{
          let tipos = JSON.parse(data['_body']) as Array<TipoDocumento>;

          tipos.forEach(tipo => {
            this.dbService.save(new TipoDocumento(tipo.codigo,tipo.nombre,tipo.descripcion));
          });
        });

      }
    })
    .catch(err=>console.error('findAll TipoDocumento: ',err));

    /* TIPO CLIMA */
    this.dbService.findAll(TipoClima)
    .then((data) => {

      if(isArray(data) && data.length == 0){

        this.http.http(this.httpPackage.getTiposClimaPackage()).subscribe(data=>{
          let tipos = JSON.parse(data['_body']) as Array<TipoClima>;

          tipos.forEach(tipo => {
            this.dbService.save(new TipoClima(tipo.codigo,tipo.nombre,tipo.descripcion));
          });
        });

      }
    })
    .catch(err=>console.error('findAll TipoAbono: ',err));

    /* TIPO ABONO */
    this.dbService.findAll(TipoAbono)
    .then((data) => {

      if(isArray(data) && data.length == 0){

        this.http.http(this.httpPackage.getTiposAbonoPackage()).subscribe(data=>{
          let tipos = JSON.parse(data['_body']) as Array<TipoAbono>;

          tipos.forEach(tipo => {
            this.dbService.save(new TipoAbono(tipo.codigo,tipo.nombre,tipo.descripcion));
          });
        });

      }
    })
    .catch(err=>console.error('findAll TipoAbono: ',err));

    /* TIPO SEMILLA */
    this.dbService.findAll(TipoSemilla)
    .then((data) => {

      if(isArray(data) && data.length == 0){

        this.http.http(this.httpPackage.getTiposSemillaPackage()).subscribe(data=>{
          let tipos = JSON.parse(data['_body']) as Array<TipoSemilla>;

          tipos.forEach(tipo => {
            this.dbService.save(new TipoSemilla(tipo.codigo,tipo.nombre,tipo.descripcion));
          });
        });

      }
    })
    .catch(err=>console.error('findAll TipoSemilla: ',err));

    /* ABONO */
    this.dbService.findAll(Abono)
    .then((data) => {

      if(data.length == 0){

        this.http.http(this.httpPackage.getAbonosPackage()).subscribe(data=>{
          let abonos = JSON.parse(data['_body']);

           abonos.forEach(abono => {
             this.dbService.save(new Abono(abono.codigo,abono.nombre,abono.descripcion,new TipoAbono(abono.tipoAbono,"","")));
           });
        });

      }
    })
    .catch(err=>console.error('findAll Abono: ',err));

     /* PAISES */
     this.dbService.findAll(Pais)
     .then((data) => {
 
       if(data.length == 0){
 
         this.http.http(this.httpPackage.getPaisesPackage()).subscribe(data=>{
           let paises = JSON.parse(data['_body']);
 
            paises.forEach(pais => {
              this.dbService.save(new Pais(pais.codigo,pais.nombre));
            });
         });
 
       }
     })
     .catch(err=>console.error('findAll paises: ',err));

     /* DEPARTAMENTOS */
     this.dbService.findAll(Departamento)
     .then((data) => {
 
       if(data.length == 0){
 
         this.http.http(this.httpPackage.getDepartaentosPackage()).subscribe(data=>{
           let departamentos = JSON.parse(data['_body']);
 
            departamentos.forEach(departamento => {

              this.dbService.save(new Departamento(departamento.codigo,departamento.nombre,new Pais(departamento.codigoPais)));
            });
         });
 
       }
     })
     .catch(err=>console.error('findAll departamentos: ',err));

     /* MUNICIPIOS */
     this.dbService.findAll(Municipio)
     .then((data) => {
       console.log(data);
 
       if(data.length == 0){
 
         this.http.http(this.httpPackage.getMunicipiosPackage()).subscribe(data=>{
           let municipios = JSON.parse(data['_body']);
 
           municipios.forEach(municipio => {
              this.dbService.save(new Municipio(municipio.codigo,municipio.nombre,new Departamento(municipio.codigoDepartamento)));
            });
         });
 
       }
     })
     .catch(err=>console.error('findAll municipios: ',err));
   
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
