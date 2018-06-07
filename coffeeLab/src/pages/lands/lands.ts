import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Finca, Municipio, Departamento, Pais, TipoClima, Usuario, UsuarioxFinca } from '../../entities';
import { AddlandPage, LandPage } from '../index';
import { Storage } from '@ionic/storage';
import { Sqlite } from '../../providers';

/**
 * Generated class for the LandsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lands',
  templateUrl: 'lands.html',
})
export class LandsPage {

  private codeLand: number;
  private allFincas: Array<Finca>;
  //private usuarioActual: Usuario;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, private menuCtrl: MenuController,
    private storage: Storage, private db: Sqlite) {
      this.allFincas = Array<Finca>();

  }

  ionViewCanEnter(){
    this.allFincas = new Array<Finca>();
    this.getAllFincasByUsuario();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandsPage');
  }

  /**
   * Una vez presionado el botón agregar finca, se ejecutará este método
   * que llevara a "land.ts", adicionalmente seteará el valor del booleano
   * edit como "true"
   */
  addLand() {
    let edit: boolean = true;
    this.navCtrl.push(LandPage, { edit });;
  }


/**
 * Una vez deslizada la finca a eliminar y presionado el botón, 
 * éste se borrará de la base de datos 
 * @param land 
 */
  delete(land) {
    this.db.delete(land)
    .then(data => this.navCtrl.pop())
    .catch(err => console.error(err))
  };

  /**
   * Setea el "edit" como falso, esto quiere decir que 
   * se podrá ver la finca seleccionada
   * @param land 
   */
  landSelected(land) {
    let edit: boolean = false;
    this.navCtrl.push(LandPage, { finca: land, edit });
  }

  /**
   * Obtiene todas las fincas de el usuario logeado 
   */
  /*getAllFincasByUsuario() {
    this.storage.get('currentUsuario')
      .then(usuario => {

        this.usuarioActual = new Usuario(usuario.tipoDocumento, usuario.numeroDocumento, usuario.correo,
          usuario.tipoUsuario, usuario.usuario, usuario.contrasena, usuario.nombres, usuario.apellidos);
        this.db.executeSQL(UsuarioxFinca.findAllQuery(this.usuarioActual), {})
          .then(data => this.fincas = <Array<Finca>>data)
          .catch(error => console.error(error))
      })
  }*/

  getAllFincasByUsuario() {
    let i = 0;
    this.db.findAll(Finca)
    .then(fincas => {
     fincas.forEach(f=>{
      let fincaAux = new Finca(f.codigo,f.nombre,f.tempPromedio,f.altitud,f.Municipio,);
      this.allFincas.push(fincaAux);
     })})
    .catch(error => console.error(error))
}

}
