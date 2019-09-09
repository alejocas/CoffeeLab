import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { Sqlite } from '../../providers';
import { TipoSemilla, Siembra } from '../../entities';

/**
 * Generated class for the RiegoModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-siembra-modal',
  templateUrl: 'siembra-modal.html',
})
export class SiembraModalPage {

  tiposSemilla:Array<TipoSemilla>;
  siembra:Siembra;

  constructor(public view: ViewController, public navParams: NavParams, private db: Sqlite) {
    console.log('modal',this.navParams.get("portion"))
    this.tiposSemilla = new Array<TipoSemilla>();
    this.siembra = new Siembra();
  }

  ionViewDidLoad() {
    this.getAlltiposSemilla();
  }

  closeModal(){
    
    let date = new Date();
    this.siembra.fecha = `${date.getFullYear().toString()}-${(date.getMonth() + 1).toString()}-${date.getDate().toString()}`;
    this.siembra.lote = this.navParams.get("portion");
    console.log(this.siembra);
    this.db.insert(this.siembra).then(
      data => {
        this.view.dismiss();
      }
    );
    
  }

  getAlltiposSemilla(){
    this.db.findAll(TipoSemilla)
    .then(data => this.tiposSemilla = data)
  }

}
