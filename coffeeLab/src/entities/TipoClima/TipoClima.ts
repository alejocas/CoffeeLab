export class TipoClima {
    public codigo:number;
    public nombre:string;
    public descripcion:string;

    constructor(codigo:number=null, nombre:string='', descripcion:string =""){
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    deleteQuery(){
        return `DELETE FROM TipoClima WHERE codigo = ${this.codigo};`;
    }

    insertQuery(){
        return `INSERT INTO TipoClima (codigo,nombre,descripcion) 
            VALUES (${this.codigo},'${this.nombre}','${this.descripcion}');`
    }

    updateQuery(){
        return `UPDATE TipoClima SET nombre = '
            ${this.nombre}', descripcion = '
            ${this.descripcion}' WHERE codigo = ${this.codigo};`
    }

    findByIdQuery(){
        return `SELECT * FROM TipoClima WHERE codigo = ${this.codigo};`;
    }

    static findAllQuery(){
        return `SELECT * FROM TipoClima;`;
    }

    static findByIdQuery(codigo:number){
        return `SELECT * FROM TipoClima WHERE codigo = ${codigo};`;
    }


    /* sentencia sql para crear la tabla de este modelo
    para crear una tabla hay que declarar la cadena en el 
    providers/sqlite.ts en la funcion createTables() */
    static getSqlCreteTable(){
        return `CREATE TABLE IF NOT EXISTS TipoClima (
            codigo integer PRIMARY KEY AUTOINCREMENT,
            nombre text NOT NULL,
            descripcion text
           );`;
    }
}