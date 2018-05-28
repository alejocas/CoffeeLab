import { Sqlite } from "../../providers/sqlite/sqlite";
import { Inject } from "@angular/core";

export class TipoClima {
    private codigo:number;
    private nombre:string;
    private descripcion:string;
    private db:Sqlite;

    constructor(codigo:number, nombre:string, descripcion:string = "",  @Inject(Sqlite) db){
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.db = db;
    }

    save(){
        this.db.create(this)
        .then(data => console.log('creado:', data))
        .catch(error => console.log(error));
        /*this.db.getAll(TipoClima.findByIdSql(this.codigo))
        .then(data1 => {
            if(data1.length == 0){
                this.db.create(`INSERT INTO TipoClima(codigo,nombre,descripcion) VALUES (${this.codigo},'${this.nombre}','${this.descripcion}');`,{})
                .then(data=>{
                    
                    console.log('inserted: ',data);
                });
            }
            else{
                
                this.db.create(`UPDATE TipoClima SET nombre = '${this.nombre}', descripcion = '${this.descripcion}' WHERE codigo = ${this.codigo};`,{})
                .then(data=>{
                    console.log('updated: ',data);
                });
            }
            
            //console.log('find: ',data1)
        });*/

    }

    delete(){
        /*this.db.delete(`DELETE FROM TipoClima WHERE codigo = ${this.codigo};`)
        .then(data => {
            console.log('delete: ',data);
        })
        .catch(error => {
            console.log(error);
        })*/
    }

    deleteQuery(){
        return `DELETE FROM TipoClima WHERE codigo = ${this.codigo};`;
    }

    insertQuery(){
        return `INSERT INTO TipoClima(codigo,nombre,descripcion) 
            VALUES (${this.codigo},'${this.nombre}','${this.descripcion}');`
    }

    updateQuery(){
        return `UPDATE TipoClima SET nombre = '
            ${this.nombre}', descripcion = '
            ${this.descripcion}' WHERE codigo = ${this.codigo};`
    }

    static findAllQuery(){
        return `SELECT * FROM TipoClima;`;
    }

    static findByIdSql(codigo:number){
        return `SELECT * FROM TipoClima WHERE codigo = ${codigo};`;
    }

    /* sentencia sql para crear la tabla de este modelo
    para crear una tabla hay que declarar la cadena en el 
    providers/sqlite.ts en la funcion createTables() */
    static getSqlCreteTable(){
        return `CREATE TABLE IF NOT EXISTS TipoClima (
            codigo integer PRIMARY KEY AUTOINCREMENT,
            nombre text NOT NULL,
            descripcion text
           );`;
    }
}