import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage'
import { Usuario } from '../../entities';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
    this.usuario = new Usuario();
  }

  ionViewDidLoad() {
    this.storage.get('currentUsuario')
    .then(usuario =>{
      console.log(usuario);
      this.usuario = usuario as Usuario; 
    })
    .catch(err => console.error('currentUsuario no encontrado:',err))
  }

  
}
