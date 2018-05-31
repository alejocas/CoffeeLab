import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage'
import { Usuario, TipoDocumento, TipoUsuario } from '../../entities';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  private usuario:Usuario;
  private isEditable:boolean = true;


  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
    /*************************************** esto se descomenta para funcionar enl movil */    
    //this.usuario = new Usuario();
    this.usuario = new Usuario(new TipoDocumento(1,"Cedula"),1238176253,"correo@gmail.com",new TipoUsuario(1,"dueño"),"usuario","usuario123","nombre1",'apellido1');
    
  }

  ionViewDidLoad() {
    /*************************************** esto se descomenta para funcionar enl movil  cambiar rootPage en app.component*/
    // this.storage.get('currentUsuario')
    // .then(usuario =>{
    //   console.log(usuario);
    //   this.usuario = usuario as Usuario; 
    // })
    // .catch(err => console.error('currentUsuario no encontrado:',err))
  }

  editProfile(){
    this.isEditable = !this.isEditable;
  }

  
}
