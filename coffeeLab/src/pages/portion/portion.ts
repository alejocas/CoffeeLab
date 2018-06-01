import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Finca, Lote } from '../../entities';
import { Sqlite } from '../../providers';
import { Storage } from '@ionic/storage';


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

  private lote: Lote;
  private fincaPredeterminada: Finca;

  /**
   * Se inicializa el lote y a este se le asigna la finca que anteriormente
   * fue elegida.
   * @param navCtrl 
   * @param navParams 
   * @param db 
   * @param storage 
   */
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private db: Sqlite, private storage: Storage) {
    this.storage.get('currentFinca')
      .then(finca => {
        this.fincaPredeterminada = new Finca(finca.codigo, finca.nombre, finca.tempPromedio,
          finca.altitud, finca.municipio, finca.tipoClima);
      })
      .catch(error => console.error(error));
    if (this.fincaPredeterminada != null) {
      this.lote = new Lote(null, this.fincaPredeterminada, null, null);
    } else {
      console.log("Elija una finca como predeterminada");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PortionPage');
  }


  /**
   * Almacena el lote en la finca predeterminada elegida previamente
   */
  savePortion() {
    this.db.save(this.lote);
    this.navCtrl.pop();
  }
}
