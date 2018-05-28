import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Finca, Pais } from '../../entities';

/**
 * Generated class for the AddlandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addland',
  templateUrl: 'addland.html',
})
export class AddlandPage {

  private finca:Finca;
  private paises: Array<Pais>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddlandPage');
  }

  getAllPaises(){
    /*TODO: obtener los paises a través de consulta*/ 
    //this.paises = getAll(pais);
    return this.paises;

  }

  paisSeleccionado(pais){
    let seleccionPais= pais;
  }


}
