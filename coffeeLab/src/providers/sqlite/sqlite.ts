import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { TipoAbono, TipoClima, TipoDocumento, TipoUsuario, Pais, Departamento, Municipio, Usuario, Finca, RegistroAbono, Abono, Lote, UsuarioxFinca, TipoSemilla, Siembra, RegistroRiego } from '../../entities/index';
import { RegistroForacion } from '../../entities/RegistroForacion/RegistroForacion';
import { RegistroControlPlaga } from '../../entities/RegistroControlPlaga/RegistroControlPlaga';


@Injectable()
export class Sqlite {

  db:SQLiteObject = null;

  constructor(public sqlite:SQLite) {}

  // public methods

  setDatabase(db: SQLiteObject){
    if(this.db === null){
      this.db = db;
    }
  }

  save(object:any){
    let promise = new Promise<Array<any>>((resolve,reject)=>{

      this.findByPk(object)
      .then(data =>{
        console.log('para insertar',data);
        
        if(data.length == 0){

          this.insert(object)
          .then(data => resolve(data))
          .catch(error => reject(error))
        }
        else{

          this.update(object)
          .then(data => resolve(data))
          .catch(error => reject(error))
        }
      })
      .catch(err=>reject(err)
      )
    });
    return promise;
  }

  findAll(entity:any){
    let promise = new Promise<Array<any>>((resolve,reject)=>{
      this.executeSQL(entity.findAllQuery(),{})
      .then(data=>resolve(data))
      .catch(error=>reject(error));
    });
    return promise;
  }

  findByPk(object:any){
    let promise = new Promise<Array<any>>((resolve,reject)=>{
      this.executeSQL(object.findByIdQuery(),{})
      .then(data=>resolve(data))
      .catch(error=>reject(error));
    });
    return promise;
  }

  insert(object:any){
    let promise = new Promise<Array<any>>((resolve,reject)=>{
      this.executeSQL(object.insertQuery(),{})
      .then(data=>resolve(data))
      .catch(error=>reject(error));
    });
    return promise;
  }

  update(object:any){
    let promise = new Promise<Array<any>>((resolve,reject)=>{
      this.executeSQL(object.updateQuery(),{})
      .then(data=>resolve(data))
      .catch(error=>reject(error));
    });
    return promise;
  }

  executeSQL(sql:string, params:any){
    let promise = new Promise<Array<any>>((resolve,reject)=>{
      this.sqlite.create({
        name: 'data.db',
        location: 'default' // the location field is required
      })
      .then((db) => {
        this.db.executeSql(sql, params).then(data=>{
          let tasks = [];
          console.log(data,sql);
          for (let index = 0; index < data.rows.length; index++) {
            tasks.push( data.rows.item(index) );
          }
          resolve( tasks );
        })
        .catch(error=>{
          reject(error);
        });
      })
      .catch(error =>{
        reject(error);
      });
    })
    return promise;
  }

  createTables(){
    let promise = new Promise<Array<any>>((resolve, reject)=>{
      this.db.executeSql(TipoAbono.getSqlCreteTable(),{}).then(data=>{
        console.log('TipoAbono: ',data);
        this.db.executeSql(TipoClima.getSqlCreteTable(),{}).then(data=>{
          console.log('TipoClima: ',data);
          this.db.executeSql(TipoDocumento.getSqlCreteTable(),{}).then(data=>{
            console.log('TipoDocumento: ',data);
            this.db.executeSql(TipoUsuario.getSqlCreteTable(),{}).then(data=>{
              console.log('TipoUsuario: ',data);
              this.db.executeSql(Pais.getSqlCreteTable(),{}).then(data=>{
                console.log('Pais: ',data);
                this.db.executeSql(Departamento.getSqlCreteTable(),{}).then(data=>{
                  console.log('Departamento: ',data);
                  this.db.executeSql(Municipio.getSqlCreteTable(),{}).then(data=>{
                    console.log('Municipio: ',data);
                    this.db.executeSql(Usuario.getSqlCreteTable(),{}).then(data=>{
                      console.log('Usuario: ',data);
                      this.db.executeSql(Finca.getSqlCreteTable(),{}).then(data=>{
                        console.log('Finca: ',data);
                        this.db.executeSql(Abono.getSqlCreteTable(),{}).then(data=>{
                          console.log('Abono: ',data);
                          this.db.executeSql(Lote.getSqlCreteTable(),{}).then(data=>{
                            console.log('Lote: ',data);
                            this.db.executeSql(RegistroAbono.getSqlCreteTable(),{}).then(data=>{
                              console.log('RegistroAbono: ',data);
                              this.db.executeSql(UsuarioxFinca.getSqlCreteTable(),{}).then(data=>{
                                console.log('UsuarioxFinca: ',data);
                                this.db.executeSql(TipoSemilla.getSqlCreteTable(),{}).then(data=>{
                                  console.log('TipoSemilla: ',data);
                                  this.db.executeSql(Siembra.getSqlCreteTable(),{}).then(data=>{
                                    console.log('Siembra: ',data);
                                    this.db.executeSql(RegistroForacion.getSqlCreteTable(),{}).then(data=>{
                                      console.log('RegistroForacion: ',data);
                                      this.db.executeSql(RegistroControlPlaga.getSqlCreteTable(),{}).then(data=>{
                                        console.log('RegistroControlPlaga: ',data);
                                        this.db.executeSql(RegistroRiego.getSqlCreteTable(),{}).then(data=>{
                                          console.log('RegistroRiego: ',data);
                                          resolve(data);
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                        
                      });
                    });
                  });
                });
              });
            });
          });
        });
      }).catch(err=>{
        reject();
      })
  
    });

    return promise;
  }
}