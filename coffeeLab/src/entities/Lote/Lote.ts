import { Finca } from "../index";
export class Lote {
    public codigo:number;
    public finca:Finca;
    public area:number;
    public pluviosidad:number;

    constructor(codigo:number= null,finca:Finca = null,area:number = null,
        pluviosidad:number = null){
        this.codigo=codigo;
        this.finca=finca;
        this.area=area;
        this.pluviosidad=pluviosidad;
    }

    deleteQuery(){
        return `DELETE FROM Lote WHERE codigo = ${this.codigo};`;
    }

    insertQuery(){
        return `INSERT INTO Lote (codigo,finca,area,pluviosidad) 
            VALUES (${this.codigo},'${this.finca.codigo}',${this.area},${this.pluviosidad});`
    }

    updateQuery(){
        return `UPDATE Lote SET 
        codigo = ${this.codigo},
        finca = '${this.finca.codigo}',
        area = ${this.area},
        pluviosidad = ${this.pluviosidad}
        WHERE codigo = ${this.codigo};`
    }

    findByIdQuery(){
        return `SELECT * FROM Lote WHERE codigo = ${this.codigo};`;
    }

    static findAllByFinca(finca:Finca){
        return `SELECT * FROM Lote WHERE finca = ${finca.codigo};`;
    }

    static findAllQuery(){
        return `SELECT * FROM Lote;`;
    }

    static findByIdQuery(codigo:number){
        return `SELECT * FROM Lote WHERE codigo = ${codigo};`;
    }


    /* sentencia sql para crear la tabla de este modelo
    para crear una tabla hay que declarar la cadena en el 
    providers/sqlite.ts en la funcion createTables() */
    static getSqlCreteTable(){
        return `CREATE TABLE IF NOT EXISTS Lote (
            codigo integer PRIMARY KEY AUTOINCREMENT,
            finca integer not null references Municipio,
            area integer,
            pluviosidad integer
        );`;
    }
}