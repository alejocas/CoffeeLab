import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage, RegisterPage, ResetPage } from '../index';
import { MenuController } from 'ionic-angular';


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
    private menuCtrl:MenuController) {
      menuCtrl.enable(false, "menu");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    /*TODO: hacer el servicio para login*/ 
    //this.navCtrl.push(HomePage)
    //this.myApp.rootPage = HomePage;
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
