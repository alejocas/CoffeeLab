import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Finca, Lote} from '../../entities';
import { Sqlite } from '../../providers';


/**
 * Generated class for the PortionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-portion',
  templateUrl: 'portion.html',
})
export class PortionPage {

  private fincas: Array<Finca>;
  private lote: Lote;
  private finca: Finca;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private db: Sqlite) {
    this.finca = new Finca();
    this.lote = new Lote();
    this.fincas = new Array<Finca>();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PortionPage');
  }

  fincaSeleccionada(finca){
    this.finca = finca;
  }
  

}
