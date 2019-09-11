import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RoyaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-roya',
  templateUrl: 'roya.html',
})
export class RoyaPage {
  roya:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.roya = navParams.get('roya');
    console.log(this.roya);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoyaPage');
  }

}
