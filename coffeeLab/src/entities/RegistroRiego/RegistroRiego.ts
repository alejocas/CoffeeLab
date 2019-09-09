import { Siembra } from "../index";
export class RegistroRiego{
    public siembra:Siembra;
    public fecha:Date;
    public tipoRiego:string;
    public listroAgua:number;

    constructor(siembra:Siembra,fecha:Date,tipoRiego:string,listroAgua:number) {
        this.siembra = siembra;
        this.fecha = fecha;
        this.tipoRiego = tipoRiego;
        this.listroAgua = listroAgua;
    }
    deleteQuery(){
        return `DELETE FROM RegistroRiego 
            WHERE lote = ${this.siembra.lote.codigo} 
            AND fechaSiembra = ${this.siembra.fecha} 
            AND fecha = ${this.fecha};`;
    }

    insertQuery(){
        return `INSERT INTO RegistroRiego (lote,fecha,tipoRiego,listroAgua) 
            VALUES (${this.siembra.lote.codigo},'${this.fecha}','${this.tipoRiego}',${this.listroAgua});`
    }

    upstringQuery(){
        return `UPstring RegistroRiego SET 
            lote = ${this.siembra.lote.codigo},
            fecha = ${this.fecha}, 
            tipoRiego = '${this.tipoRiego}',
            listroAgua = '${this.listroAgua}'
            WHERE lote = ${this.siembra.lote.codigo} 
            AND fechaSiembra = ${this.siembra.fecha} 
            AND fecha = ${this.fecha};`;
    }

    findByIdQuery(){
        return `SELECT * FROM RegistroRiego
        WHERE lote = ${this.siembra.lote.codigo} 
            AND fechaSiembra = ${this.siembra.fecha} 
            AND fecha = ${this.fecha};`;
    }

    static findAllQuery(){
        return `SELECT * FROM RegistroRiego;`;
    }

    static findByIdQuery(siembra:Siembra, fecha:Date){
        return `SELECT * FROM RegistroRiego 
        WHERE lote = ${siembra.lote.codigo} 
            AND fechaSiembra = ${siembra.fecha} 
            AND fecha = ${fecha};`;
    }


    /* sentencia sql para crear la tabla de este modelo
    para crear una tabla hay que declarar la cadena en el 
    providers/sqlite.ts en la funcion createTables() */
    static getSqlCreteTable(){
        return `CREATE TABLE IF NOT EXISTS RegistroRiego (
            lote integer NOT NULL,
            fechaSiembra text NOT NULL,
            fecha text NOT NULL,
            tipoRiego text NOT NULL,
            listroAgua integer NOT NULL,
            PRIMARY KEY(lote, fechaSiembra ,fecha),
            FOREIGN KEY(lote) REFERENCES Siembra(lote),
            FOREIGN KEY(fechaSiembra) REFERENCES Siembra(fecha)
           );`;
    }
}