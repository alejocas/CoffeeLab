import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Finca } from '../../entities';

/**
 * Generated class for the ViewlandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewland',
  templateUrl: 'viewland.html',
})
export class ViewlandPage {

  private finca:Finca;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.finca = navParams.get('finca');
    console.log(this.finca);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewlandPage');
  }

}
