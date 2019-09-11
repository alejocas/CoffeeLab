import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Sqlite } from '../../providers';
import { Storage } from "@ionic/storage";
import { Finca } from '../../entities';
import { PortionsPage } from '../portions/portions';
import { PagesRoyaPage } from '../pages-roya/pages-roya';
import { RoyaPage } from '../roya/roya';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentLand:Finca;
  royas:Array<any> = [];
  color:boolean = true;
  interval:any;

  constructor(public navCtrl: NavController, public navParams:NavParams, private db: Sqlite, private storage: Storage) {
    console.log(navParams.get('usuario'));
    this.royas = new Array<any>();
  }

  
  ionViewCanEnter() {
    this.storage.get('currentFinca')
    .then(data =>{
      this.currentLand = data;
    })
    .catch(data => {
      console.log(data);
    });

    this.storage.get('royas')
    .then(royas =>{
      this.royas = royas;
    })
    //this.interval = setTimeout(()=>this.color = !this.color,2000)
  }

  ionViewCanLeave(){
   //this.interval.clearInterval();
  }

  goToPortions() {
    this.navCtrl.push(PortionsPage);
  }

  clickRoya(roya){
    this.navCtrl.push(RoyaPage,{'roya': roya})
    //console.log(roya);
  }
  
}
