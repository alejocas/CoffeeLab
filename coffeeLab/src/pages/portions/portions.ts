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
            this.openRiegoModal()
          }
        }, {
          text: 'Suelo',
          icon: 'globe',
          handler: () => {
            this.openSueloModal();
          }
        }, {
          text: 'Abono',
          icon: 'leaf',
          handler: () => {
            this.openAbonoModal();
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

  openRiegoModal() {
    const myModalS = this.modalCtrl.create('RiegoModalPage');
    myModalS.present();
  }

  openSueloModal() {
    const myModalS = this.modalCtrl.create('SueloModalPage');
    myModalS.present();
  }
  openAbonoModal() {
    const myModalA = this.modalCtrl.create('AbonoModalPage');
    myModalA.present();
  }
  openFloracionModal() {
    const myModalF = this.modalCtrl.create('FloracionModalPage');
    myModalF.present();
  }
  openRecoleccionModal() {
    const myModalR = this.modalCtrl.create('RecoleccionModalPage');
    myModalR.present();
  }
  openPlagaModal() {
    const myModalP = this.modalCtrl.create('PlagaModalPage');
    myModalP.present();
  }

}
