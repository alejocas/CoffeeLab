import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AbonoModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abono-modal',
  templateUrl: 'abono-modal.html',
})
export class AbonoModalPage {

  constructor(public view: ViewController, public navParams: NavParams) {
  }

  closeModal(){
    this.view.dismiss();
  }

}
