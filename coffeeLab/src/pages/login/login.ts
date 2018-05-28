import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage, RegisterPage, ResetPage } from '../index';
import { MenuController } from 'ionic-angular';
import { TipoAbono, TipoClima } from '../../entities/index'
import { Sqlite } from '../../providers/sqlite/sqlite';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private home:HomePage;
  private username:string;
  private password:string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private menuCtrl:MenuController,
    private db:Sqlite) {
      menuCtrl.enable(false, "menu");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    /*TODO: hacer el servicio para login*/ 
    //this.navCtrl.push(HomePage)
    //this.myApp.rootPage = HomePage;
    let clima = new TipoClima(null,'templado','es un clima muy bueno');
    this.db.save(clima);

    //clima = new TipoClima(1,"asdf","Adsf",this.db);
    //clima.delete();
    this.db.findAll(TipoClima).then(data=>{
      console.log('findAll:',data);
    });
      
    this.navCtrl.setRoot(HomePage);
    this.menuCtrl.enable(true, "menu");
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

  reset(){
    this.navCtrl.push(ResetPage);
  }

}
