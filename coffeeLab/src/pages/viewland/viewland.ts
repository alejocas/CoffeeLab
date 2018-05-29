import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Finca, Departamento, Pais, Municipio, TipoClima, Usuario, TipoDocumento, TipoUsuario } from '../../entities';

/**
 * Generated class for the ViewlandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewland',
  templateUrl: 'viewland.html',
})
export class ViewlandPage {

  private tipoClimas: Array<TipoClima>;
  private edit:boolean;
  private finca: Finca;
  private fincaNueva: Finca;
  private paises: Array<Pais>;
  private pais: Pais;
  private departamento: Departamento;
  private municipio: Municipio;
  private codigoDepartamentoSeleccionado: number;
  private codigoMunicipioSeleccionado: number;
  private departamentos: Array<Departamento>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.edit = navParams.get('edit');
    console.log(this.edit);
    if (this.edit == false) {
      this.finca = navParams.get('finca');
      console.log(this.finca);
    } else {
      this.finca = new Finca(1, 'asdf', 12, 1900, new Municipio(1, 'medellin', new Departamento
        (1, "antioquia", new Pais(1, "colombia"))), new TipoClima(1, "templado", ""));
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewlandPage');
    if (this.edit == true) {
      let pais = [];
      for (let i = 0; i < 10; i++) {
        pais.push(new Pais(i, i.toString()));
      }
      this.paises = pais;
      let tipoClimatest = [];
      for (let i = 0; i < 10; i++) {
        pais.push(new TipoClima(i,"frio","something"));
      }
      this.tipoClimas = tipoClimatest;
    } 
  }

    paisSeleccionado(pais){
    this.pais= pais;
  }

  departamentoSeleccionado(departamento){
    this.departamento= departamento;
  }

  municipioSeleccionado(municipio){
    this.municipio= municipio;
  }

  save(){
    this.fincaNueva = new Finca();
    console.log(this.finca);
  }

  getAllPaises(){
    /*TODO: obtener los paises a través de consulta*/ 
    //this.paises = getAll(pais);
    return this.paises;
  }

}
