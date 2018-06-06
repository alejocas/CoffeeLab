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
  private fincaPorDefecto: Finca;
  private paises: Array<Pais>;
  private pais: Pais;
  private fincasTodas: Array<Finca>; 

  private departamento: Departamento;
  private municipio: Municipio;
  private codigoDepartamentoSeleccionado: number;
  private codigoMunicipioSeleccionado: number;
  private departamentos: Array<Departamento>;

  /**
   * Instancia las array de paises, departamentos, municipios y paises
   * Adicionalmente define si el "land.html" trabajará como add o como view
   * por medio de la variable booleana "edit" obtenida de "lands.ts"
   * @param navCtrl 
   * @param navParams 
   * @param db 
   * @param storage 
   */
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private db: Sqlite, private storage: Storage) {

    this.fincasTodas = Array<Finca>();  
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
    this.storage.get('currentFinca')
    .catch(data => {
      if(data == null){
        this.db.findAll(Finca)
        .then(fincas => {
          this.fincasTodas = <Array<Finca>>fincas;
          if(this.fincasTodas.length > 0){
          this.fincaPorDefecto = this.fincasTodas[0];
          this.storage.set('currentFinca', this.fincaPorDefecto);
        } else {
          console.log("No hay fincas del usuario en la base de datos"); 
        }
        })

      }
    })
    
  }

  /**
   * Guarda la finca en la base de datos con los datos ingresados 
   */
  saveLand() {
    this.db.save(this.finca)
      .then(data => this.navCtrl.pop())
      .catch(err => console.error(err))
  }

  ionViewCanEnter() {
    this.getAllPaises();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandPage');
  }


  /**
   * Método getter para obtener el municipio seleccionado
   * @param pais 
   */
  paisSeleccionado(pais) {
    this.pais = pais;
  }

  /**
   * Método getter para obtener el departamento seleccionado
   * @param departamento 
   */
  departamentoSeleccionado(departamento) {
    this.departamento = departamento;
  }

  /**
   * Método getter para obtener el municipio seleccionado
   * @param municipio 
   */
  municipioSeleccionado(municipio) {
    this.municipio = municipio;
  }

  /**
   * Obtiene todos los paises existentes.
   */

  getAllPaises() {
    this.db.findAll(Pais)
      .then(data => this.paises = <Array<Pais>>data)
      .catch(err => console.error(err))

  }

  /**
   * Obtiene todos los departamentos existentes en la base de datos
   * según el departamento seleccionado
   */

  getAllDepartamentos() {
    this.db.findByPk(new Departamento(null, null, this.pais))
      .then(data => this.departamentos = <Array<Departamento>>data)
      .catch(err => console.error(err))
  }

  /**
   * Obtiene todos los municipios existentes en la base de datos
   * según el departamento seleccionado
   */
  getAllMunicipios() {
    this.db.findByPk(new Municipio(null, null, this.departamento))
      .then(data => this.municipios = <Array<Municipio>>data)
      .catch(err => console.error(err))
  }

  /**
   * Obtiene todos los tipos de clima existentes en la base de datos
   */

  getAllTipoClimas() {
    this.db.findAll(TipoClima)
      .then(data => this.tipoClimas = <Array<TipoClima>>data)
      .catch(err => console.error(err))
  }

  /**
   * Éste método establece una finca predeterminada. Con la finca predeterminada
   * se puede llevar el registro de abono, floración, etc.
   */
  setDefaultLand() {
    this.storage.set('currentFinca', this.finca)
      .then(data => console.log(data))
      .catch(err => console.error(err));
    this.navCtrl.push(LandsPage);;

  }
}