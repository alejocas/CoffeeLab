import { Departamento } from '../index';

export class Municipio {
    public codigo:number;
    public nombre:string;
    public departamento:Departamento;

    constructor(codigo:number = null, nombre:string = '', departamento:Departamento = new Departamento()){
        this.codigo = codigo;
        this.nombre = nombre;
        this. departamento = departamento;
    }

    deleteQuery(){
        return `DELETE FROM Municipio WHERE codigo = ${this.codigo};`;
    }

    insertQuery(){
        return `INSERT INTO Municipio (codigo,nombre,departamento) 
            VALUES (${this.codigo},'${this.nombre}','${this.departamento.codigo}');`
    }

    updateQuery(){
        return `UPDATE Municipio SET 
            nombre = '${this.nombre}', 
            departamento = '${this.departamento.codigo}' 
            WHERE codigo = ${this.codigo};`;
    }

    findByIdQuery(){
        return `SELECT * FROM Municipio WHERE codigo = ${this.codigo};`;
    }

    static findAllQuery(){
        return `SELECT * FROM Municipio;`;
    }

    static findByIdQuery(codigo:number){
        return `SELECT * FROM Municipio WHERE codigo = ${codigo};`;
    }


    /* sentencia sql para crear la tabla de este modelo
    para crear una tabla hay que declarar la cadena en el 
    providers/sqlite.ts en la funcion createTables() */
    static getSqlCreteTable(){
        return `CREATE TABLE IF NOT EXISTS Municipio (
            codigo integer PRIMARY KEY AUTOINCREMENT,
            nombre text NOT NULL,
            departamento integer NOT NULL REFERENCES Departamento
           );`;
    }
}