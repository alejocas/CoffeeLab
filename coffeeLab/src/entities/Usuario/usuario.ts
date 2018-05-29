import { TipoDocumento, TipoUsuario } from '../index';

export class Usuario {
    public tipoDocumento:TipoDocumento;
    public numeroDocumento:number;
    public correo:string;
    public tipoUsuario:TipoUsuario;
    public usuario:string;
    public contrasena:string;
    public nombres:string;
    public apellidos:string;

    constructor(tipoDocumento:TipoDocumento = new TipoDocumento(), numeroDocumento:number = null,
         correo:string = '', tipoUsuario:TipoUsuario = new TipoUsuario(), usuario:string = '',
         contrasena:string = '', nombres:string = '', apellidos:string = ''){

            this.tipoDocumento=tipoDocumento;
            this.numeroDocumento=numeroDocumento;
            this.correo=correo;
            this.tipoUsuario=tipoUsuario;
            this.usuario=usuario;
            this.contrasena=contrasena;
            this.nombres=nombres;
            this.apellidos=apellidos;
        
    }

    deleteQuery(){
        return `DELETE FROM Usuario WHERE tipoDocumento = ${this.tipoDocumento.codigo} AND numeroDocumento = ${this.numeroDocumento};`;
    }

    insertQuery(){
        return `INSERT INTO Usuario (tipoDocumento,numeroDocumento,correo,tipoUsuario,usuario,contrasena,nombres,apellidos) 
            VALUES (${this.tipoDocumento.codigo},${this.numeroDocumento},'${this.correo}',${this.tipoUsuario.codigo},
            '${this.usuario}','${this.contrasena}','${this.nombres}','${this.apellidos}');`
    }

    updateQuery(){
        return `UPDATE Usuario SET 
        tipoDocumento = ${this.tipoDocumento.codigo},
        numeroDocumento = ${this.numeroDocumento},
        correo = '${this.correo}',
        tipoUsuario = ${this.tipoUsuario.codigo},
        usuario = '${this.usuario}',
        contrasena = '${this.contrasena}',
        nombres = '${this.nombres}',
        apellidos = '${this.apellidos}'
        WHERE tipoDocumento = ${this.tipoDocumento.codigo} AND numeroDocumento = ${this.numeroDocumento};`
    }

    findByIdQuery(){
        return `SELECT * FROM Usuario WHERE tipoDocumento = ${this.tipoDocumento.codigo} AND numeroDocumento = ${this.numeroDocumento};`;
    }

    static findAllQuery(){
        return `SELECT * FROM Usuario;`;
    }

    static findByIdQuery(tipoDocumento:TipoDocumento ,numeroDocumento:number){
        return `SELECT * FROM Usuario WHERE tipoDocumento = ${tipoDocumento.codigo} AND numeroDocumento = ${numeroDocumento};`;
    }


    /* sentencia sql para crear la tabla de este modelo
    para crear una tabla hay que declarar la cadena en el 
    providers/sqlite.ts en la funcion createTables() */
    static getSqlCreteTable(){
        return `CREATE TABLE IF NOT EXISTS Usuario (
            tipoDocumento integer not null references TipoDocumento,
            numeroDocumento integer,
            correo text,
            tipoUsuario integer not null references TipoUsuario,
            usuario text NOT NULL,
            contrasena text NOT NULL,
            nombres text NOT NULL,
            apellidos text,
            PRIMARY KEY(tipoDocumento, numeroDocumento)
        );`;
    }
}