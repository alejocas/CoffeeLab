import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage, LoginPage, ResetPage } from '../index';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
}
