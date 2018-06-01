import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage, LoginPage, ResetPage } from '../index';
import { MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private menuCtrl: MenuController, public formBuilder: FormBuilder) {

    menuCtrl.enable(false, "menu");
    this.registerPag = formBuilder.group({
      usuario: ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      contrasena: ['',Validators.compose([Validators.maxLength(30), Validators.required])],
      nombre: ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      apellidos: ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      correo: ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      numDocumento: ['',Validators.required ]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  login() {
    this.navCtrl.push(LoginPage);
  }

}
