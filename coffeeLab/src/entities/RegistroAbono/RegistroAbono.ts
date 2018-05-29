import { Lote, Abono } from "../index";
export class RegistroAbono{
    public lote:Lote;
    public abono:Abono;
    public fecha:Date;
    constructor(lote:Lote,abono:Abono,fecha:Date) {
        this.lote=lote;
        this.abono=abono;
        this.fecha=fecha;
    }
    deleteQuery(){
        return `DELETE FROM RegistroAbono WHERE lote = ${this.lote.codigo} AND abono = ${this.abono.codigo} AND fecha = ${this.fecha};`;
    }

    insertQuery(){
        return `INSERT INTO RegistroAbono (lote,abono,fecha) 
            VALUES (${this.lote.codigo},'${this.abono.codigo}','${this.fecha}');`
    }

    updateQuery(){
        return `UPDATE RegistroAbono SET 
            lote = ${this.lote.codigo},
            abono = ${this.abono.codigo}, 
            fecha = '${this.fecha}' 
            WHERE lote = ${this.lote.codigo} AND abono = ${this.abono.codigo} AND fecha = ${this.fecha};`;
    }

    findByIdQuery(){
        return `SELECT * FROM RegistroAbono WHERE lote = ${this.lote.codigo} AND abono = ${this.abono.codigo} AND fecha = ${this.fecha};`;
    }

    static findAllQuery(){
        return `SELECT * FROM RegistroAbono;`;
    }

    static findByIdQuery(lote:Lote,abono:Abono,fecha:Date){
        return `SELECT * FROM RegistroAbono WHERE lote = ${lote.codigo} AND abono = ${abono.codigo} AND fecha = ${fecha};`;
    }


    /* sentencia sql para crear la tabla de este modelo
    para crear una tabla hay que declarar la cadena en el 
    providers/sqlite.ts en la funcion createTables() */
    static getSqlCreteTable(){
        return `CREATE TABLE IF NOT EXISTS RegistroAbono (
            lote integer NOT NULL REFERENCES Lote,
            abono integer NOT NULL REFERENCES Abono,
            fecha text NOT NULL,
            PRIMARY KEY(lote, abono, fecha)
           );`;
    }
}