import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Finca, Pais, Municipio, Departamento, TipoClima, Usuario, TipoDocumento, TipoUsuario } from '../../entities';

/**
 * Generated class for the AddlandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addland',
  templateUrl: 'addland.html',
})
export class AddlandPage {

  public edit:boolean;
  private finca:Finca;
  private paises: Array<Pais>;
  private codigoPaisSeleccionado:number;
  private codigoDepartamentoSeleccionado:number;
  private codigoMunicipioSeleccionado: number;
  private departamentos: Array<Departamento>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.finca = new Finca(1,'asdf',12,1900,new Municipio(1, 'medellin', new Departamento
    (1,"antioquia",new Pais(1,"colombia"))),new TipoClima(1,"templado",""),
    new Usuario(new TipoDocumento(10,"cedula",""),1012,"",new TipoUsuario(1,"Admin",""),"cualquier cosa","1234","Adonai","por que te casaste"));
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad AddlandPage');
    let pais = [];
    for(let i=0; i<10; i++){
      pais.push(new Pais(i,i.toString()));
    }
    this.paises = pais;
    /*TODO: obtener los departamentos a través del código del país*/ 
    //this.departamentos = getAllDepartamentos(codigoPais);
    //this.municipios = getAllMunicipios(codigoMunicipio);
  }

  getAllPaises(){
    /*TODO: obtener los paises a través de consulta*/ 
    //this.paises = getAll(pais);
    return this.paises;

  }

  /*paisSeleccionado(codigoPais){
    this.codigoPaisSeleccionado= codigoPais;
  }

  departamentoSeleccionado(codigoDepartamento){
    this.codigoDepartamentoSeleccionado= codigoDepartamento;
  }

  municipioSeleccionado(codigoMunicipio){
    this.codigoMunicipioSeleccionado= codigoMunicipio;
  }
*/
}
