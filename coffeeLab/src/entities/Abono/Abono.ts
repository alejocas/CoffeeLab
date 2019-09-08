import { TipoAbono } from "../index";

export class Abono {
    public codigo:number;
    public nombre:string;
    public descripcion:string;
    public tipoAbono:TipoAbono;

    constructor(codigo:number,nombre:string,descripcion:string,tipoAbono:TipoAbono){
        this.codigo=codigo;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.tipoAbono=tipoAbono;
    }

    deleteQuery(){
        return `DELETE FROM Abono WHERE codigo = ${this.codigo};`;
    }

    insertQuery(){
        return `INSERT INTO Abono (codigo,nombre,descripcion,tipoAbono) 
            VALUES (${this.codigo},'${this.nombre}',${this.descripcion},${this.tipoAbono.codigo});`
    }

    updateQuery(){
        return `UPDATE Abono SET 
        codigo = ${this.codigo},
        nombre = '${this.nombre}',
        descripcion = '${this.descripcion}',
        tipoAbono = ${this.tipoAbono}
        WHERE codigo = ${this.codigo};`
    }

    findByIdQuery(){
        return `SELECT * FROM Abono WHERE codigo = ${this.codigo};`;
    }

    static findAllQuery(){
        return `SELECT * FROM Abono;`;
    }

    static findByIdQuery(codigo:number){
        return `SELECT * FROM Abono WHERE codigo = ${codigo};`;
    }


    /* sentencia sql para crear la tabla de este modelo
    para crear una tabla hay que declarar la cadena en el 
    providers/sqlite.ts en la funcion createTables() */
    static getSqlCreteTable(){
        return `CREATE TABLE IF NOT EXISTS Abono (
            codigo integer PRIMARY KEY AUTOINCREMENT,
            nombre text NOT NULL,
            descripcion text,
            tipoAbono integer not null references TipoAbono
        );`;
    }
}