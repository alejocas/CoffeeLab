import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Finca } from '../../entities';
import { AddlandPage } from '../index';

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

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, private menuCtrl:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandsPage');
  }

  addLand(){
    this.navCtrl.push(AddlandPage);
  };

  deleteLand(){};

  viewLand(){};

  itemSelected(item:Finca){

  }

}
