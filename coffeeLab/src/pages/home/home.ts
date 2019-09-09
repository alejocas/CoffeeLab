import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Sqlite } from '../../providers';
import { Storage } from "@ionic/storage";
import { Finca } from '../../entities';
import { PortionsPage } from '../portions/portions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentLand:Finca;

  constructor(public navCtrl: NavController, public navParams:NavParams, private db: Sqlite, private storage: Storage) {
    console.log(navParams.get('usuario'));
  }

  
  ionViewCanEnter() {
    this.storage.get('currentFinca')
    .then(data =>{
      this.currentLand = data;
    })
    .catch(data => {
      console.log(data);
    })
  }

  goToPortions() {
    this.navCtrl.push(PortionsPage);
  }
  
}
