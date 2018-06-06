import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RecoleccionModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recoleccion-modal',
  templateUrl: 'recoleccion-modal.html',
})
export class RecoleccionModalPage {

  constructor(public view: ViewController, public navParams: NavParams) {
  }

  closeModal(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoleccionModalPage');
  }

}
