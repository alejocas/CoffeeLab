import { Lote, TipoSemilla } from "../index";

export class Siembra {
    public lote:Lote;
    public tipoSemilla:TipoSemilla;
    public numeroSemilla:number;
    public fecha:string;

    constructor(lote:Lote,tipoSemilla:TipoSemilla,numeroSemilla:number,fecha:string){
        this.lote = lote;
        this.tipoSemilla = tipoSemilla;
        this.numeroSemilla = numeroSemilla;
        this.fecha = fecha;
    }

    deleteQuery(){
        return `DELETE FROM Siembra WHERE lote = ${this.lote.codigo} AND fecha = ${this.fecha};`;
    }

    insertQuery(){
        return `INSERT INTO Siembra (lote,tipoSemilla,numeroSemilla,fecha) 
            VALUES (${this.lote.codigo},'${this.tipoSemilla.codigo}',${this.numeroSemilla},${this.fecha});`
    }

    updateQuery(){
        return `UPDATE Siembra SET 
        lote = ${this.lote.codigo},
        tipoSemilla = '${this.tipoSemilla.codigo}',
        numeroSemilla = ${this.numeroSemilla},
        fecha = ${this.fecha}
        WHERE lote = ${this.lote.codigo} AND fecha = ${this.fecha};`;
    }

    findByIdQuery(){
        return `SELECT * FROM Siembra WHERE lote = ${this.lote.codigo} AND fecha = ${this.fecha};`;
    }

    static findAllQuery(){
        return `SELECT * FROM Siembra;`;
    }

    static findByIdQuery(lote:Lote,fecha:Date){
        return `SELECT * FROM Siembra WHERE lote = ${lote.codigo} AND fecha = ${fecha};`;
    }


    /* sentencia sql para crear la tabla de este modelo
    para crear una tabla hay que declarar la cadena en el 
    providers/sqlite.ts en la funcion createTables() */
    static getSqlCreteTable(){
        return `CREATE TABLE IF NOT EXISTS Siembra (
            lote integer NOT NULL references Lote,
            tipoSemilla integer NOT NULL references TipoSemila,
            numeroSemilla integer,
            fecha text NOT NULL,
            PRIMARY KEY(lote, fecha)
        );`;
    }
}