import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpProvider, PackageProvider, Sqlite } from '../../providers';



@IonicPage()
@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})
export class ResetPage {

  private username:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
      public http:HttpProvider, public httpPackage:PackageProvider, 
      public alertCtl:AlertController, private db:Sqlite) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPage');
  }

  reset(){
    this.db.executeSQL(`SELECT correo, usuario, contrasena 
    FROM Usuario WHERE correo = '${this.username}' OR usuario = '${this.username}';`,{})
    .then(body=>{

      if(body.length == 1){
        let pack = this.httpPackage.getResetPasswordPackage(body[0]);

        this.http.http(pack)
        .subscribe(result =>{

          let alert = this.alertCtl.create({
            title: 'Exitosos',
            subTitle: 'Se envio un correo recordando la contraseña.',
            buttons: ['Aceptar']
          });
          alert.present();
        });
      }

    })
    .catch(err=>console.log(err));
    
  }
}
