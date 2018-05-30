import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage, RegisterPage, ResetPage } from '../index';
import { MenuController } from 'ionic-angular';
import { TipoAbono, TipoClima, Usuario } from '../../entities/index'
import { Sqlite } from '../../providers/sqlite/sqlite';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { isArray } from 'ionic-angular/util/util';


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
  private loginPag:FormGroup;
  private isPassword:boolean = true;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private menuCtrl:MenuController, private db:Sqlite,
              private formBuilder:FormBuilder, private alertCtl: AlertController) {

      menuCtrl.enable(false, "menu");
      this.loginPag = formBuilder.group({
                      usuario: ['',Validators.compose([Validators.maxLength(30),
                                                        Validators.minLength(5), 
                                                        Validators.pattern('[a-zA-Z0-9]*'), 
                                                        Validators.required])],
                      contrasena: ['',Validators.compose([Validators.maxLength(30),
                                                        Validators.minLength(5), 
                                                        Validators.required])]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    if(this.loginPag.valid){
      this.db.executeSQL(Usuario.loginQuery(this.username,this.password),{})
      .then(data=>{
        console.log(data);
        if(isArray(data) && data.length == 1){
          this.navCtrl.setRoot(HomePage);
          this.menuCtrl.enable(true, "menu");
        }
        else{
          this.showAlert('Error','Usuario y/o contraseña inválidos.')
        }
        
      })
      .catch(err=>{
        console.error(err);
        this.showAlert('Error','Problemas con la plataforma, por favor intentar mas tarde.')
      });
    }
    else{
      this.showAlert('Error','Los campos no pueden estar vacios.')
    }
      
    // this.navCtrl.setRoot(HomePage);
    // this.menuCtrl.enable(true, "menu");
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

  reset(){
    this.navCtrl.push(ResetPage);
  }

  passwordToogle(){
    this.isPassword = !this.isPassword;
  }

  showAlert(title:string,messaje:string){
    let alert = this.alertCtl.create({
      title: title,
      subTitle: messaje,
      buttons: ['Aceptar']
    });
    alert.present();
  }

}
