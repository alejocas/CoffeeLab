import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the PortionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-portions',
  templateUrl: 'portions.html',
})
export class PortionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public modalCtrl: ModalController, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PortionsPage');
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Acciones para el lote',
      buttons: [
        {
          text: 'Riego',
          icon: 'water',
          handler: () => {
            // this.openRiegoModal();
          }
        }, {
          text: 'Suelo',
          icon: 'globe',
          handler: () => {
            // this.openSueloModal();
          }
        }, {
          text: 'Abono',
          icon: 'leaf',
          handler: () => {
            // this.openAbonoModal();
          }
        }, {
          text: 'Floración',
          icon: 'flower',
          handler: () => {
            // this.openFloracionModal();
          }
        }, {
          text: 'Recolección',
          icon: 'nutrition',
          handler: () => {
           // this.openRecoleccionModal();
          }
        }, {
          text: 'Plaga',
          icon: 'bug',
          handler: () => {
            //this.openPlagaModal();
          }
        }
      ]
    });
    actionSheet.present();
  }

}
