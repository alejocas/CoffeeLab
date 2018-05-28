import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Finca, Municipio, Departamento, Pais, TipoClima } from '../../entities';
import { AddlandPage, ViewlandPage } from '../index';

/**
 * Generated class for the LandsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lands',
  templateUrl: 'lands.html',
})
export class LandsPage {

  private codeLand:number;
  private finca:Finca;
  private fincas:Array<Finca>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, private menuCtrl:MenuController) {
      this.finca = new Finca("El uberrimo", 20, 1000, 
      new Municipio(1,"Copacabana", new Departamento(1,"Antioquia",new Pais(1,"Colombia"))), 
      new TipoClima(1,"frio",""));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandsPage');
    let testFincas = [];
    for(let i = 0; i< 10; i++){
      testFincas.push(new Finca(i.toString(),i,i,new Municipio(i,i.toString(), 
        new Departamento(i, i.toString(), new Pais(i, i.toString()))), new TipoClima(i, i.toString(), 
        i.toString())));
    }
    this.fincas = testFincas;
    //testFincas.push(new Finca("El platanal", 30, 1200, 
    //new Municipio(1,"Copacabana", new Departamento(1,"Antioquia",new Pais(1,"Colombia"))), 
    //new TipoClima(1,"Caliente","")));
    this.fincas = testFincas;
  }

  addLand(){
    this.navCtrl.push(AddlandPage);
  };

  deleteLand(){};

  viewLand(){};

  landSelected(codigoFinca){
    //this.codeLand=codigoFinca;
    //en el push, falta mandar el codigo de la finca
    this.navCtrl.push(ViewlandPage);
  }

}
