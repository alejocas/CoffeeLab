import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';


@Injectable()
export class Sqlite {

  public db:SQLiteObject;

  constructor(public sqlite:SQLite) {
    
  }

  public executeSQL(sql){
    this.connection()
      .then((db: SQLiteObject) => {
        db.executeSql(sql, {})
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }

  private connection(){
    return new Promise(function(resolve,reject){
      if(this.db){
        resolve(this.db);
      }
      else{
        this.sqlite.create({
          name: 'data.db',
          location: 'default'
        })
        .then((db:SQLiteObject)=>{resolve(db)})
        .catch(err => {reject(new Error(err))})
      }
    })
    
  }

  create(sql:string){
  
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      db.executeSql(sql, {})
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));
    })
    .catch(e => console.log(e));
  }

}
