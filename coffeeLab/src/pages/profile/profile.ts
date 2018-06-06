import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { Usuario, TipoDocumento, TipoUsuario } from '../../entities';
import { Sqlite } from '../../providers';

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
  private isPassword:boolean = true;


  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage,
    public db:Sqlite, public alertCtl:AlertController) {
    /*************************************** esto se descomenta para funcionar enl movil */    
    this.usuario = new Usuario();
    //this.usuario = new Usuario(new TipoDocumento(1,"Cedula"),1238176253,"correo@gmail.com",new TipoUsuario(1,"dueño"),"usuario","usuario123","nombre1",'apellido1');
    
  }

  ionViewDidLoad() {
    /*************************************** esto se descomenta para funcionar enl movil  cambiar rootPage en app.component*/
    this.storage.get('currentUsuario')
    .then(usuario =>{
      console.log(usuario);
      this.usuario = new Usuario(usuario.tipoDocumento, usuario.numeroDocumento, usuario.correo,
        usuario.tipoUsuario, usuario.usuario, usuario.contrasena, usuario.nombres, usuario.apellidos);

    })
    .catch(err => console.error('currentUsuario no encontrado:',err))
  }

  editProfile(){
    this.isEditable = !this.isEditable;
  }

  saveChanges(){
    console.log(this.usuario);
    this.db.save(this.usuario)
    .then(data=>{
      this.showAlert('Exitoso','Los datos fueron guardados exitosamente');
      this.editProfile();
      this.storage.set('currentUsuario',this.usuario);
    })
    .catch(err=>{
      console.error(err);
      this.showAlert('Error','Los datos no fueron guardados exitosamente, intentelo mas tarde o contacte con el administrador del sistema');
    });
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
