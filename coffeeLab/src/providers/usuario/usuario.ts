import { Injectable } from '@angular/core';
import { Sqlite } from '../sqlite/sqlite';
import { TipoUsuario, TipoDocumento, Usuario } from '../../entities';
import { isArray } from 'ionic-angular/util/util';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  constructor(public db:Sqlite) {
    //console.log('Hello UsuarioProvider Provider');
  }

  getUsuario(usuario:any){
    let promise = new Promise((resolve,reject)=>{
      this.db.findByPk(new TipoUsuario(usuario.tipoDocumento))
      .then(tipoDocumento=>{

        if(isArray(tipoDocumento) && tipoDocumento.length ==1){
          usuario.tipoDocumento= tipoDocumento[0] as TipoDocumento;
        }
        else reject('TipoDocumento no econtrado')

        this.db.findByPk(new TipoDocumento(usuario.tipoUsuario))
        .then(tipoUsuario=>{

          if(isArray(tipoDocumento) && tipoDocumento.length ==1){
            usuario.tipoUsuario = tipoUsuario[0] as TipoUsuario;
            resolve(usuario as Usuario)
          } 
          else reject('TipoUsuario no econtrado')
        })
        .catch(err=>reject(err))
      })
      .catch(err=>reject(err));
    });
    return promise;
  }

}
