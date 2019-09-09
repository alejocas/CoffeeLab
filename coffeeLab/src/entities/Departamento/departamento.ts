import { Pais } from '../index';

export class Departamento {
    public codigo:number;
    public nombre:string;
    public pais:Pais;

    constructor(codigo:number=null, nombre:string='', pais:Pais=new Pais()){
        this.codigo = codigo;
        this.nombre = nombre;
        this.pais = pais;
    }

    deleteQuery(){
        return `DELETE FROM Departamento WHERE codigo = ${this.codigo};`;
    }

    insertQuery(){
        return `INSERT INTO Departamento (codigo,nombre,pais) 
            VALUES (${this.codigo},'${this.nombre}','${this.pais.codigo}');`
    }

    updateQuery(){
        return `UPDATE Departamento SET 
            nombre = '${this.nombre}', 
            pais = '${this.pais.codigo}' 
            WHERE codigo = ${this.codigo};`;
    }

    findByIdQuery(){
        return `SELECT * FROM Departamento WHERE codigo = ${this.codigo};`;
    }

    queryCustom(index){
        let querys = [];
        querys.push(`SELECT * FROM Departamento WHERE pais = ${this.pais.codigo};`);
        return querys[index];
    }

    static findAllQuery(){
        return `SELECT * FROM Departamento;`;
    }

    static findByIdQuery(codigo:number){
        return `SELECT * FROM Departamento WHERE codigo = ${codigo};`;
    }


    /* sentencia sql para crear la tabla de este modelo
    para crear una tabla hay que declarar la cadena en el 
    providers/sqlite.ts en la funcion createTables() */
    static getSqlCreteTable(){
        return `CREATE TABLE IF NOT EXISTS Departamento (
            codigo integer PRIMARY KEY,
            nombre text NOT NULL,
            pais integer NOT NULL
           );`;
    }
}