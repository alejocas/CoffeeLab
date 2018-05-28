import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TipoAbono, TipoClima } from '../../entities/index'
import { Sqlite } from '../../providers/sqlite/sqlite';
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
   /* let organico = new TipoAbono(null,"asdf");
    /*this.db.create(organico.getSqlInsert(),{}).then(data=>{
      console.log('insertado: ',data);
      this.db.getAll(TipoAbono.getSqlSelectAll()).then(data=>{
        console.log(data);
      })
    });*/

    let clima = new TipoClima(null,'templado','es un clima muy bueno');
    clima.save();

    //clima = new TipoClima(1,"asdf","Adsf",this.db);
    //clima.delete();
    this.db.findAll(TipoClima).then(data=>{
      console.log('findAll:',data);
    });
  }

}
