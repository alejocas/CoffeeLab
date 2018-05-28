import { Describer } from "../../utils/Describer";
import { Sqlite } from "../../providers/sqlite/sqlite";
import { Inject } from "@angular/core";

export class TipoUsuario {
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

    /* sentencia sql para crear la tabla de este modelo
    para crear una tabla hay que declarar la cadena en el 
    providers/sqlite.ts en la funcion createTables() */
    static getSqlCreteTable(){
        return `CREATE TABLE IF NOT EXISTS TipoUsuario (
            codigo integer PRIMARY KEY AUTOINCREMENT,
            nombre text NOT NULL,
            descripcion text
           );`;
    }
}