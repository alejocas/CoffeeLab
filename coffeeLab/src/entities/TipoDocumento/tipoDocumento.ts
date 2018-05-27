import { Describer } from "../../utils/Describer";
import { Sqlite } from "../../providers/sqlite/sqlite";
import { Inject } from "@angular/core";

export class TipoDocumento {
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
        
        this.db.getAll(TipoDocumento.findByIdSql(this.codigo))
        .then(data1 => {
            if(data1.length == 0){
                this.db.create(`INSERT INTO TipoDocumento(codigo,nombre,descripcion) VALUES (${this.codigo},'${this.nombre}','${this.descripcion}');`,{})
                .then(data=>{
                    console.log('insert: ',data);
                });
            }
            else{
                
                this.db.create(`UPDATE TipoDocumento SET nombre = '${this.nombre}', descripcion = '${this.descripcion}' WHERE codigo = ${this.codigo};`,{})
                .then(data=>{
                    console.log('update: ',data);
                });
            }
            console.log('find: ',data1)
        });

    }

    delete(){
        this.db.delete(`DELETE FROM TipoDocumento WHERE codigo = ${this.codigo};`)
        .then(data => {
            console.log('delete: ',data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    static findByIdSql(codigo:number){
        return `SELECT * FROM TipoDocumento WHERE codigo = ${codigo};`;
    }

    /* sentencia sql para crear la tabla de este modelo
    para crear una tabla hay que declarar la cadena en el 
    providers/sqlite.ts en la funcion createTables() */
    static getSqlCreteTable(){
        return `CREATE TABLE IF NOT EXISTS TipoDocumento (
            codigo integer PRIMARY KEY AUTOINCREMENT,
            nombre text NOT NULL,
            descripcion text
           );`;
    }
}