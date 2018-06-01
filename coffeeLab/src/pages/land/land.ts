import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Finca, Departamento, Pais, Municipio, TipoClima, Usuario, TipoDocumento, TipoUsuario } from '../../entities';
import { Sqlite } from '../../providers';
import { Storage } from "@ionic/storage";
import { LandsPage } from '..';

/**
 * Generated class for the LandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-land',
  templateUrl: 'land.html',
})
export class LandPage {

  private municipios: Array<Municipio>;
  private tipoClimas: Array<TipoClima>;
  private edit: boolean;
  private finca: Finca;
  private paises: Array<Pais>;
  private pais: Pais;

  private departamento: Departamento;
  private municipio: Municipio;
  private codigoDepartamentoSeleccionado: number;
  private codigoMunicipioSeleccionado: number;
  private departamentos: Array<Departamento>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private db: Sqlite, private storage: Storage) {

    this.edit = navParams.get('edit');
    this.finca = new Finca();
    this.paises = new Array<Pais>();
    this.departamentos = new Array<Departamento>();
    this.municipios = new Array<Municipio>();
    if (this.edit == false) {
      this.finca = navParams.get('finca');
      console.log(this.finca);
    } else {
    }
  }

  saveLand() {
    this.db.save(this.finca)
      .then(data => this.navCtrl.pop())
      .catch(err => console.error(err))
  }

  ionViewCanEnter() {
    this.finca = new Finca();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandPage');
  }

  paisSeleccionado(pais) {
    this.pais = pais;
  }

  departamentoSeleccionado(departamento) {
    this.departamento = departamento;
  }

  municipioSeleccionado(municipio) {
    this.municipio = municipio;
  }

  getAllPaises() {
    this.db.findAll(Pais)
      .then(data => this.paises = <Array<Pais>>data)
      .catch(err => console.error(err))

  }

  getAllDepartamentos() {
    this.db.findByPk(new Departamento(null, null, this.pais))
      .then(data => this.departamentos = <Array<Departamento>>data)
      .catch(err => console.error(err))
  }

  getAllMunicipios() {
    this.db.findByPk(new Municipio(null, null, this.departamento))
      .then(data => this.municipios = <Array<Municipio>>data)
      .catch(err => console.error(err))
  }

  getAllTipoClimas() {
    this.db.findAll(TipoClima)
      .then(data => this.tipoClimas = <Array<TipoClima>>data)
      .catch(err => console.error(err))
  }

  setDefaultLand() {
    this.storage.set('currentFinca', this.finca)
      .then(data => console.log(data))
      .catch(err => console.error(err));
      this.navCtrl.push(LandsPage);;

  }
}