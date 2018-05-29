import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage, LoginPage, ResetPage } from '../index';
import { MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario, TipoUsuario, TipoDocumento } from '../../entities';
import { Sqlite } from '../../providers/sqlite/sqlite';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('signupSlider') signupSlider: any;
  registerPag: FormGroup;

  private newUser:Usuario;
  private isPassword:boolean = true;
  private tiposDocumento:Array<TipoDocumento>;
  private tiposUsuario:Array<TipoUsuario>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private menuCtrl: MenuController, public formBuilder: FormBuilder,
    private alertCtl: AlertController, private db:Sqlite) {

      //deshabilita el side menu
      menuCtrl.enable(false, "menu");

      this.tiposDocumento = new Array<TipoDocumento>();
      this.tiposUsuario = new Array<TipoUsuario>();
      

      this.tiposDocumento.push(new TipoDocumento(1,"Cédula de Ciudadania"));
      this.tiposDocumento.push(new TipoDocumento(2, "Tarjeta de Identidad"));
      this.tiposDocumento.push(new TipoDocumento(3, "Cédula Extrangera"));

      this.tiposUsuario.push(new TipoUsuario(1, "Dueño Finca"));
      this.tiposUsuario.push(new TipoUsuario(2, "Invitado"));
      

      this.newUser = new Usuario();
      
    this.registerPag = formBuilder.group({
      usuario: ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      contrasena: ['',Validators.compose([Validators.maxLength(30),Validators.minLength(5), Validators.required])],
      nombre: ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      apellidos: ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      correo: ['',Validators.compose([Validators.pattern("[^ @]*@[^ @]*"), Validators.required])],
      numDocumento: ['',Validators.compose([Validators.maxLength(30), Validators.pattern("[0-9]*"), Validators.required])],
      tipoDocumento:[TipoDocumento,Validators.required],
      tipoUsuario:[TipoUsuario,Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    

    if(this.registerPag.valid){
      this.db.save(this.newUser)
      .then(data=>{
        console.log(data);
        this.navCtrl.pop();
      })
      .catch(err=>{
        console.error(err);
      })
    }
    else{
      console.log(this.registerPag)
      let alert = this.alertCtl.create({
        title: 'Información Incompleta',
        subTitle: 'Por favor llene los campos que son obligatorios.',
        buttons: ['Acpetar']
      });
      alert.present();
    }
  }

  passwordToogle(){
    this.isPassword = !this.isPassword;
  }

  clear(){
    this.newUser = new Usuario();
  }

}
