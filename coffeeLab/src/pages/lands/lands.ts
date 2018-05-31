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

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandsPage');
    let testFincas = [];
    for (let i = 0; i < 10; i++) {
      testFincas.push(new Finca(i, i.toString(), i, i, new Municipio(i, i.toString(),
        new Departamento(i, i.toString(), new Pais(i, i.toString()))), new TipoClima(i, i.toString(),
          i.toString())));
    }
    console.log(testFincas);
    this.fincas = testFincas;
    //testFincas.push(new Finca("El platanal", 30, 1200, 
    //new Municipio(1,"Copacabana", new Departamento(1,"Antioquia",new Pais(1,"Colombia"))), 
    //new TipoClima(1,"Caliente","")));
    //this.fincas = testFincas;
  }

  addLand() {
    let edit: boolean = true;
    this.navCtrl.push(LandPage, { edit });;
  }

  getAllLands() {
    this.storage.get('currentUsuario')
      .then(data => {
        this.usuarioActual = data;
        this.db.findByPk(new UsuarioxFinca(this.usuarioActual,null))
          .then(data => this.fincas = <Array<Finca>>data)
          .catch(err => console.error(err))
      })
      .catch(err => console.error(err))
  }


  delete(land) {
    let indice: number;
    indice = this.fincas.findIndex(x => x === land);
    this.fincas.splice(indice, 1);
  };

  landSelected(land) {
    //this.codeLand=codigoFinca;
    //en el push, falta mandar el codigo de la finca
    let edit: boolean = false;
    this.navCtrl.push(LandPage, { finca: land, edit });
  };

}
