import { Injectable } from '@angular/core';
import { Sqlite } from '../sqlite/sqlite';
import { TipoUsuario, TipoDocumento, Usuario } from '../../entities';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  constructor(public db:Sqlite) {
    console.log('Hello UsuarioProvider Provider');
  }

  getUsuario(usuario:any){
    let promise = new Promise((resolve,reject)=>{
      this.db.findByPk(new TipoUsuario(usuario.tipoDocumento))
      .then(tipoDocumento=>{
        usuario.tipoDocumento=tipoDocumento;
        this.db.findByPk(new TipoDocumento(usuario.tipoUsuario))
        .then(tipoUsuario=>{
          usuario.tipoUsuario = tipoUsuario;
          resolve(usuario as Usuario)
        })
        .catch(err=>reject(err))
      })
      .catch(err=>reject(err));
    });
    return promise;
  }

}
