import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage, RegisterPage, ResetPage } from '../index';
import { MenuController } from 'ionic-angular';
import { TipoAbono, TipoClima, Usuario, TipoDocumento, TipoUsuario, UsuarioxFinca, Finca } from '../../entities/index'
import { Sqlite, UsuarioProvider as UsuarioP } from '../../providers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { isArray } from 'ionic-angular/util/util';
import { Storage } from "@ionic/storage";


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
  private user:Usuario;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private menuCtrl:MenuController, private db:Sqlite,
              private formBuilder:FormBuilder, private alertCtl: AlertController,
              private usuarioP: UsuarioP, private storage:Storage) {

      
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
    this.menuCtrl.enable(false, "menu");
    //this.isUserLogin();
  }


  login(){
    if(this.loginPag.valid){
      this.db.executeSQL(Usuario.loginQuery(this.username,this.password),{})
      .then(data=>{
        console.log(data);
        
        if(isArray(data) && data.length == 1){

          this.usuarioP.getUsuario(data[0])
          .then(usuario => {
            this.storage.set('currentUsuario',usuario).then(data=>console.log(data)).catch(err=>console.error(err));
            this.navCtrl.setRoot(HomePage,{usuario: usuario});
            this.menuCtrl.enable(true, "menu");
          })
          .catch()
          //this.navCtrl.setRoot(HomePage);
          //this.menuCtrl.enable(true, "menu");
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

  // isUserLogin(){
  //     this.storage.get('currentUsuario')
  //     .then(usuario => {
  //       console.log('current usuario: ',usuario);
  //       if(usuario != null && usuario.usuario){
  //         this.navCtrl.setRoot(HomePage);
  //         this.menuCtrl.enable(true, "menu");
  //       }
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // }

  showAlert(title:string,messaje:string){
    let alert = this.alertCtl.create({
      title: title,
      subTitle: messaje,
      buttons: ['Aceptar']
    });
    alert.present();
  }

}
