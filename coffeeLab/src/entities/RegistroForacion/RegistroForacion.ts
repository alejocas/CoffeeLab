import { Siembra } from "../index";
export class RegistroForacion{
    public siembra:Siembra;
    public fechaInicio:Date;
    public clasificacion:string;
    public fechaFinal:Date;

    constructor(siembra:Siembra,fechaInicio:Date,clasificacion:string,fechaFinal:Date) {
        this.siembra = siembra;
        this.fechaInicio = fechaInicio;
        this.clasificacion = clasificacion;
        this.fechaFinal = fechaFinal;
    }
    deleteQuery(){
        return `DELETE FROM RegistroForacion WHERE lote = ${this.siembra.lote.codigo} AND fechaInicio = ${this.fechaInicio};`;
    }

    insertQuery(){
        return `INSERT INTO RegistroForacion (lote,fechaSiembra,fechaInicio,clasificacion,fechaFinal) 
            VALUES (${this.siembra.lote.codigo},'${this.siembra.fecha}','${this.fechaInicio}','${this.clasificacion}',${this.fechaFinal});`
    }

    updateQuery(){
        return `UPDATE RegistroForacion SET 
            lote = ${this.siembra.lote.codigo},
            fechaInicio = ${this.fechaInicio}, 
            clasificacion = '${this.clasificacion}',
            fechaFinal = '${this.fechaFinal}'
            WHERE lote = ${this.siembra.lote.codigo} AND fechaInicio = ${this.fechaInicio};`;
    }

    findByIdQuery(){
        return `SELECT * FROM RegistroForacion WHERE lote = ${this.siembra.lote.codigo} AND fechaInicio = ${this.fechaInicio};`;
    }

    static findAllQuery(){
        return `SELECT * FROM RegistroForacion;`;
    }

    static findByIdQuery(siembra:Siembra, fechaInicio:Date){
        return `SELECT * FROM RegistroForacion WHERE lote = ${siembra.lote.codigo} AND fechaInicio = ${fechaInicio};`;
    }


    /* sentencia sql para crear la tabla de este modelo
    para crear una tabla hay que declarar la cadena en el 
    providers/sqlite.ts en la funcion createTables() */
    static getSqlCreteTable(){
        return `CREATE TABLE IF NOT EXISTS RegistroForacion (
            lote integer NOT NULL,
            fechaSiembra text NOT NULL,
            fechaInicio text NOT NULL,
            clasificacion text NOT NULL,
            fechaFinal text,
            PRIMARY KEY(lote, fechaInicio),
            FOREIGN KEY(lote) REFERENCES Siembra(lote),
            FOREIGN KEY(fechaSiembra) REFERENCES Siembra(fecha)
           );`;
    }
}