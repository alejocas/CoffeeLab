import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RiegoModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-riego-modal',
  templateUrl: 'riego-modal.html',
})
export class RiegoModalPage {

  constructor(public view: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiegoModalPage');
  }
  closeModal(){
    this.view.dismiss();
  }

}
