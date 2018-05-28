import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { TipoAbono, TipoClima, TipoDocumento, TipoUsuario } from '../../entities/index';


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
    let promise = new Promise((resolve,reject)=>{

      this.findByPk(object)
      .then(data =>{
        console.log('validar',data)
        let data1 = new Array(data)
        if(data1.length == 0){
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
    });
    return promise;
  }
  /*create(sql:string, params:any){
    let promise = new Promise((resolve,reject)=>{
      this.executeSQL(sql,params)
      .then(data=>resolve(data))
      .catch(error=>reject(error));
    });
    return promise;
  }*/

  findAll(entity:any){
    let promise = new Promise((resolve,reject)=>{
      this.executeSQL(entity.findAllQuery(),{})
      .then(data=>resolve(data))
      .catch(error=>reject(error));
    });
    return promise;
  }

  findByPk(object:any){
    let promise = new Promise((resolve,reject)=>{
      this.executeSQL(object.findByIdQuery(),{})
      .then(data=>resolve(data))
      .catch(error=>reject(error));
    });
    return promise;
  }

  insert(object:any){
    let promise = new Promise((resolve,reject)=>{
      this.executeSQL(object.insertQuery(),{})
      .then(data=>resolve(data))
      .catch(error=>reject(error));
    });
    return promise;
  }

  update(object:any){
    let promise = new Promise((resolve,reject)=>{
      this.executeSQL(object.updateQuery(),{})
      .then(data=>resolve(data))
      .catch(error=>reject(error));
    });
    return promise;
  }

  executeSQL(sql:string, params:any){
    let promise = new Promise((resolve,reject)=>{
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

  /*create(sql:string, params:any){
    let promise = new Promise((resolve,reject)=>{
      this.sqlite.create({
        name: 'data.db',
        location: 'default' // the location field is required
      })
      .then((db) => {
        this.db.executeSql(sql, params).then(data=>{
          let tasks = [];
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
  }*/

  createTables(){
    let promise = new Promise((resolve, reject)=>{
      this.db.executeSql(TipoAbono.getSqlCreteTable(),{}).then(data=>{
        console.log('TipoAbono: ',data);
        this.db.executeSql(TipoClima.getSqlCreteTable(),{}).then(data=>{
          console.log('TipoClima: ',data);
          this.db.executeSql(TipoDocumento.getSqlCreteTable(),{}).then(data=>{
            console.log('TipoDocumento: ',data);
            this.db.executeSql(TipoUsuario.getSqlCreteTable(),{}).then(data=>{
              console.log('TipoUsuario: ',data);
              resolve(data);
            });
          });
        });
      }).catch(err=>{
        reject();
      })
  
    });

    return promise;
  }

  /*delete(sql:string){
    return this.db.executeSql(sql, {});
  }

  getAll(sql:string){

    return this.db.executeSql(sql, [])
    .then(response => {
      let tasks = [];
      for (let index = 0; index < response.rows.length; index++) {
        tasks.push( response.rows.item(index) );
      }
      return Promise.resolve( tasks );
    })
    .catch(error => Promise.reject(error));
  }

  update(task: any){
    let sql = 'UPDATE tasks SET title=?, completed=? WHERE id=?';
    return this.db.executeSql(sql, [task.title, task.completed, task.id]);
  }*/

}

  // executeSQL(sql:string){
    
  //   console.log(sql);

  //   let promise = new Promise((resolve, reject) => {

  //     this.sqlite.create({
  //       name: 'data.db',
  //       location: 'default'
  //     })
  //     .then((db: SQLiteObject) => {
  //       db.executeSql(sql, {})
  //         .then((data) => {
  //           console.log('Executed SQL',data)
  //           resolve(data);
  //         })
  //         .catch(e => {
  //           console.log(e);
  //           reject(e);
  //         });
  //     })
  //     .catch(e => {
  //       console.log(e);
  //       reject(e);
  //     });
  //   });

  //   return promise;
  // }

  // createDataBase(){

  //   console.log("creando la base de datos");
  //   /*let sql = TipoAbono.getSqlCreteTable() +
  //                 TipoClima.getSqlCreteTable() +
  //                 TipoDocumento.getSqlCreteTable() +
  //                 TipoUsuario.getSqlCreteTable() +
  //                 "INSERT INTO `TipoAbono`(`codigo`,`nombre`,`descripcion`) VALUES (1,'hola','');";
  //   this.executeSQL(sql).then(data=>{
  //     console.log(data);
  //   },err=>{
  //     console.log('error: ',err);
  //   })
  //   setTimeout(() => {
  //     this.executeSQL(`SELECT * FROM TipoAbono;`)
  //   }, 5000);*/
  //   // this.executeSQL(TipoAbono.getSqlCreteTable() +
  //   //               TipoClima.getSqlCreteTable() +
  //   //               TipoDocumento.getSqlCreteTable() +
  //   //               TipoUsuario.getSqlCreteTable()
  //   //               );
  //   this.executeSQL(TipoAbono.getSqlCreteTable()).then(data=>{
  //     this.executeSQL("INSERT INTO `TipoAbono`(`codigo`,`nombre`,`descripcion`) VALUES (1,'hola','');").then(data=>{
  //       this.executeSQL(`SELECT * FROM TipoAbono;`).then(data=>{
  //         console.log(data)
  //       });
  //     });
  //   })
  //   this.executeSQL(TipoClima.getSqlCreteTable());
  //   this.executeSQL(TipoDocumento.getSqlCreteTable());
  //   this.executeSQL(TipoUsuario.getSqlCreteTable());
   
    
  // }

// }
