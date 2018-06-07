import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';
import {PortionPage} from '../index';
import { Lote, Finca } from '../../entities';
import { Storage } from '@ionic/storage';
import { Sqlite } from '../../providers';

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

  private portions:Array<Lote>;
  private currentLand:Finca;


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public modalCtrl: ModalController, public actionSheetCtrl: ActionSheetController,
    private storage: Storage, private db:Sqlite) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PortionsPage');
    this.storage.get('currentFinca')
    .then(finca=>{
      this.currentLand=finca as Finca;
      this.db.executeSQL(Lote.findAllByFinca(finca),{})
      .then(lotes=>{
        lotes.forEach(lote => {
          this.portions.push(new Lote(lote.codigo, finca, lote.area, lote.pluviosidad));
        });
        //console.log(lotes, finca);
      })
      .catch(err=>console.error(err));
    })
    .catch(err=>console.error(err))
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
            this.openFloracionModal();
          }
        }, {
          text: 'Recolección',
          icon: 'nutrition',
          handler: () => {
           this.openRecoleccionModal();
          }
        }, {
          text: 'Plaga',
          icon: 'bug',
          handler: () => {
            this.openPlagaModal();
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

  addPortion(){
    this.navCtrl.push(PortionPage);
  }
}
