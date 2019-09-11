import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { RegistroControlPlaga, Lote } from '../../entities';
import { Sqlite } from '../../providers';
import { Storage } from "@ionic/storage";
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
  lote:Lote;
  royas:Set<any>;

  constructor(public view: ViewController, public navParams: NavParams, public db:Sqlite,
    private storage:Storage) {
      this.lote = this.navParams.get('portion');
      this.royas = new Set<any>();
  }

  closeModal(){
    this.royas.add({
      portion: this.lote, 
      plaga: {
        tittle: `Presencia de Roya!!!`,
        message: 'Estado de la Roya es muy avanzado, por favor tomar acciones lo mas pronto posible',
        image: 'https://federaciondecafeteros.org/static/images/uploads/foto3(2).png',
        acciones: 'https://federaciondecafeteros.org/static/images/uploads/tabla2(1).png',
        nota: 'En cultivos sembrados con variedad Caturra con un nivel de infección por roya entre 11% y 17%, se puede disminuir la producción para este año, en aproximadamente 17 arrobas (@) de café pergamino seco. Si epidemia es igual para el segundo año, la reducción de la producción sería de 29 @.'
      }
    });
    this.storage.set("royas", Array.from(this.royas));
    this.view.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PlagaModalPage');
  }
  ionViewDidEnter(){
    this.storage.get('royas')
    .then(royas =>{
      this.royas = new Set(royas);
    })
  }

}
