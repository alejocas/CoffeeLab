import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Finca, Municipio, Departamento, Pais, TipoClima, Usuario, TipoDocumento, TipoUsuario, UsuarioxFinca } from '../../entities';
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
  public fincas: Array<Finca>;
  private usuarioActual: Usuario;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, private menuCtrl: MenuController,
    private storage: Storage, private db: Sqlite) {
      this.fincas = Array<Finca>();

  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad LandsPage');
    this.getAllFincasByUsuario();
    /*let testFincas = [];
    for (let i = 0; i < 10; i++) {
      testFincas.push(new Finca(i, i.toString(), i, i, new Municipio(i, i.toString(),
        new Departamento(i, i.toString(), new Pais(i, i.toString()))), new TipoClima(i, i.toString(),
          i.toString())));
    }
    console.log(testFincas);
    this.fincas = testFincas;*/
    //testFincas.push(new Finca("El platanal", 30, 1200, 
    //new Municipio(1,"Copacabana", new Departamento(1,"Antioquia",new Pais(1,"Colombia"))), 
    //new TipoClima(1,"Caliente","")));
    //this.fincas = testFincas;
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
    /*let indice: number;
    indice = this.fincas.findIndex(x => x === land);
    this.fincas.splice(indice, 1);*/
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
  getAllFincasByUsuario() {
    this.storage.get('currentUsuario')
      .then(usuario => {

        this.usuarioActual = new Usuario(usuario.tipoDocumento, usuario.numeroDocumento, usuario.correo,
          usuario.tipoUsuario, usuario.usuario, usuario.contrasena, usuario.nombres, usuario.apellidos);
        this.db.executeSQL(UsuarioxFinca.findAllQuery(this.usuarioActual), {})
          .then(data => this.fincas = <Array<Finca>>data)
          .catch(error => console.error(error))
      })
  }

}
