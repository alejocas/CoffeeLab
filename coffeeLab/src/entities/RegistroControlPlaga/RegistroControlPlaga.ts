import { Lote, Abono, Siembra } from "../index";
export class RegistroControlPlaga{
    public siembra:Siembra;
    public fecha:Date;
    public plaga:string;
    public descripcion:string;

    constructor(siembra:Siembra,fecha:Date,plaga:string,descripcion:string) {
        this.siembra = siembra;
        this.fecha = fecha;
        this.plaga = plaga;
        this.descripcion = descripcion;
    }
    deleteQuery(){
        return `DELETE FROM RegistroControlPlaga 
            WHERE lote = ${this.siembra.lote.codigo} 
            AND fechaSiembra = ${this.siembra.fecha} 
            AND fecha = ${this.fecha};`;
    }

    insertQuery(){
        return `INSERT INTO RegistroControlPlaga (lote,fecha,plaga,descripcion) 
            VALUES (${this.siembra.lote.codigo},'${this.fecha}','${this.plaga}',${this.descripcion});`
    }

    upstringQuery(){
        return `UPstring RegistroControlPlaga SET 
            lote = ${this.siembra.lote.codigo},
            fecha = ${this.fecha}, 
            plaga = '${this.plaga}',
            descripcion = '${this.descripcion}'
            WHERE lote = ${this.siembra.lote.codigo} 
            AND fechaSiembra = ${this.siembra.fecha} 
            AND fecha = ${this.fecha};`;
    }

    findByIdQuery(){
        return `SELECT * FROM RegistroControlPlaga
        WHERE lote = ${this.siembra.lote.codigo} 
            AND fechaSiembra = ${this.siembra.fecha} 
            AND fecha = ${this.fecha};`;
    }

    static findAllQuery(){
        return `SELECT * FROM RegistroControlPlaga;`;
    }

    static findByIdQuery(siembra:Siembra, fecha:Date){
        return `SELECT * FROM RegistroControlPlaga 
        WHERE lote = ${siembra.lote.codigo} 
            AND fechaSiembra = ${siembra.fecha} 
            AND fecha = ${fecha};`;
    }


    /* sentencia sql para crear la tabla de este modelo
    para crear una tabla hay que declarar la cadena en el 
    providers/sqlite.ts en la funcion createTables() */
    static getSqlCreteTable(){
        return `CREATE TABLE IF NOT EXISTS RegistroControlPlaga (
            lote integer NOT NULL REFERENCES Siembra,
            fechaSiembra text NOT NULL REFERENCES Siembra,
            fecha text NOT NULL,
            plaga text NOT NULL,
            descripcion text NOT NULL,
            PRIMARY KEY(lote, fechaSiembra ,fecha)
           );`;
    }
}