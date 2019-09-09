import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { RegistroControlPlaga } from '../../entities';

/**
 * Generated class for the PlagaModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plaga-modal',
  templateUrl: 'plaga-modal.html',
})
export class PlagaModalPage {

  registroPlaga:RegistroControlPlaga;

  constructor(public view: ViewController, public navParams: NavParams) {
  }

  closeModal(){
    this.view.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PlagaModalPage');
  }

}
