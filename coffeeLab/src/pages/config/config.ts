import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TipoAbono } from '../../entities/index'
import {Sqlite} from '../../providers/sqlite/sqlite';
/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public db:Sqlite) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
    this.db.create( `CREATE TABLE IF NOT EXISTS TipoAbono (
      codigo integer PRIMARY KEY AUTOINCREMENT,
      nombre text NOT NULL,
      descripcion text
     );`);
    let tipoAbono = new TipoAbono(1,"Organico");
    tipoAbono.save();
  }

}
