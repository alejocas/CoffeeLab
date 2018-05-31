import { Usuario, Finca } from '../index';

export class UsuarioxFinca {
    private usuario:Usuario;
    private finca:Finca;
    

    constructor(usuario:Usuario = null, finca:Finca = null){
            this.usuario=usuario;
            this.finca=finca; 
    }

    deleteQuery(){
        return `DELETE FROM UsuarioxFinca WHERE tipoDocumento = ${this.usuario.tipoDocumento.codigo}
        AND numeroDocumento = ${this.usuario.numeroDocumento}
        AND finca = ${this.finca.codigo};`;
    }

    insertQuery(){
        return `INSERT INTO UsuarioxFinca (tipoDocumento,numeroDocumento,finca) 
            VALUES (${this.usuario.tipoDocumento.codigo},${this.usuario.numeroDocumento},${this.finca.codigo});`
    }

    updateQuery(){
        return `UPDATE UsuarioxFinca SET tipoDocumento = ${this.usuario.tipoDocumento.codigo},
        numeroDocumento = ${this.usuario.numeroDocumento},
        finca = ${this.finca.codigo}
        WHERE tipoDocumento = ${this.usuario.tipoDocumento.codigo}
        AND numeroDocumento = ${this.usuario.numeroDocumento}
        AND finca = ${this.finca.codigo};`;
    }

    findByIdQuery(){
        return `SELECT * FROM UsuarioxFinca WHERE tipoDocumento = ${this.usuario.tipoDocumento.codigo}
            AND numeroDocumento = ${this.usuario.numeroDocumento}
            OR finca = ${this.finca.codigo};`;
    }

    static findAllQuery(){
        return `SELECT * FROM UsuarioxFinca;`;
    }

    static findByIdQuery(usuario:Usuario,finca:Finca){
        return `SELECT * FROM UsuarioxFinca WHERE tipoDocumento = ${usuario.tipoDocumento.codigo}
            AND numeroDocumento = ${usuario.numeroDocumento}
            OR finca = ${finca.codigo};`;
    }


    /* sentencia sql para crear la tabla de este modelo
    para crear una tabla hay que declarar la cadena en el 
    providers/sqlite.ts en la funcion createTables() */
    static getSqlCreteTable(){
        return `CREATE TABLE IF NOT EXISTS UsuarioxFinca (
            codigo integer PRIMARY KEY AUTOINCREMENT,
            nombre text NOT NULL
           );`;
    }
}