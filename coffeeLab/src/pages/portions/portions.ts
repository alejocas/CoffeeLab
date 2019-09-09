import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';
import {PortionPage} from '../index';
import { Lote, Finca, Siembra } from '../../entities';
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

  ionViewDidEnter() {
    this.portions = new Array<Lote>();
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



  presentActionSheet(portion) {
    this.db.findByPk(new Siembra(portion,null,null,'2019-09-10'))
    .then(data => {
      console.log(data);
      if(data.length > 0){
        this.createModalsToControl(portion,data[0]);
      } else {
        this.createModalSiembra(portion);
      }
    })
  }

  createModalsToControl(portion,siembra){
    console.log(portion);
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Acciones para el lote',
      buttons: [
        {
          text: 'Riego',
          icon: 'water',
          handler: () => {
            this.openRiegoModal(portion,siembra)
          }
        }, {
          text: 'Suelo',
          icon: 'globe',
          handler: () => {
            this.openSueloModal(portion);
          }
        }, {
          text: 'Abono',
          icon: 'leaf',
          handler: () => {
            this.openAbonoModal(portion);
          }
        }, {
          text: 'Floración',
          icon: 'flower',
          handler: () => {
            this.openFloracionModal(portion);
          }
        }, {
          text: 'Recolección',
          icon: 'nutrition',
          handler: () => {
           this.openRecoleccionModal(portion);
          }
        }, {
          text: 'Plaga',
          icon: 'bug',
          handler: () => {
            this.openPlagaModal(portion);
          }
        }
      ]
    });
    actionSheet.present();
  }

  createModalSiembra(portion){
    console.log(portion);
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Acciones para el lote',
      buttons: [
        {
          text: 'Siembra',
          icon: 'water',
          handler: () => {
            this.openSiembraModal(portion)
          }
        }
      ]
    });
    actionSheet.present();
  }

  openRiegoModal(portion, siembra) {
    const myModalS = this.modalCtrl.create('RiegoModalPage',{portion: portion, siembra: siembra});
    myModalS.present();
  }

  openSueloModal(portion) {
    const myModalS = this.modalCtrl.create('SueloModalPage');
    myModalS.present();
  }
  openAbonoModal(portion) {
    const myModalA = this.modalCtrl.create('AbonoModalPage');
    myModalA.present();
  }
  openFloracionModal(portion) {
    const myModalF = this.modalCtrl.create('FloracionModalPage');
    myModalF.present();
  }
  openRecoleccionModal(portion) {
    const myModalR = this.modalCtrl.create('RecoleccionModalPage');
    myModalR.present();
  }
  openPlagaModal(portion) {
    const myModalP = this.modalCtrl.create('PlagaModalPage');
    myModalP.present();
  }
  openSiembraModal(portion){
    const myModalP = this.modalCtrl.create('SiembraModalPage',{portion: portion});
    myModalP.present();
  }

  addPortion(){
    this.navCtrl.push(PortionPage);
  }

}
