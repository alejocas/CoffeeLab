import { Municipio, TipoClima, Usuario } from '../index';

export class Finca {
    
    public codigo:number;
    public nombre:string;
    public tempPromedio:number;
    public altitud:number;
    public municipio:Municipio;
    public tipoClima:TipoClima;

    constructor(codigo:number = null, nombre:string = '', tempPromedio:number = null,
         altitud:number = null, municipio:Municipio = new Municipio(), tipoClima:TipoClima = new TipoClima()){

            this.codigo=codigo
            this.nombre=nombre;
            this.tempPromedio=tempPromedio;
            this.altitud=altitud;
            this.municipio=municipio;
            this.tipoClima=tipoClima;
    }

    deleteQuery(){
        return `DELETE FROM Finca WHERE tipoDocumento = ${this.codigo};`;
    }

    insertQuery(){
        return `INSERT INTO Finca (codigo,nombre,tempPromedio,altitud,municipio,tipoClima) 
            VALUES (${this.codigo},'${this.nombre}',${this.tempPromedio},${this.altitud},
            ${this.municipio},${this.tipoClima});`
    }

    updateQuery(){
        return `UPDATE Finca SET 
        codigo = ${this.codigo},
        nombre = '${this.nombre}',
        tempPromedio = ${this.tempPromedio},
        altitud = ${this.altitud},
        municipio = ${this.municipio},
        tipoClima = ${this.tipoClima}
        WHERE tipoDocumento = ${this.codigo};`
    }

    findByIdQuery(){
        return `SELECT * FROM Finca WHERE tipoDocumento = ${this.codigo};`;
    }

    static findAllQuery(){
        return `SELECT * FROM Finca;`;
    }

    static findByIdQuery(codigo:number){
        return `SELECT * FROM Finca WHERE tipoDocumento = ${codigo};`;
    }


    /* sentencia sql para crear la tabla de este modelo
    para crear una tabla hay que declarar la cadena en el 
    providers/sqlite.ts en la funcion createTables() */
    static getSqlCreteTable(){
        return `CREATE TABLE IF NOT EXISTS Finca (
            codigo integer PRIMARY KEY AUTOINCREMENT,
            nombre text NOT NULL,
            tempPromedio integer,
            altitud integer,
            municipio integer not null references Municipio,
            tipoClima integer not null references TipoClima
        );`;
    }
}