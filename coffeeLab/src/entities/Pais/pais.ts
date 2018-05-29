export class Pais {
    public codigo:number;
    public nombre:string;

    constructor(codigo:number = null, nombre:string=''){
        this.codigo = codigo;
        this.nombre = nombre;
    }

    deleteQuery(){
        return `DELETE FROM Pais WHERE codigo = ${this.codigo};`;
    }

    insertQuery(){
        return `INSERT INTO Pais (codigo,nombre) 
            VALUES (${this.codigo},'${this.nombre}');`
    }

    updateQuery(){
        return `UPDATE Pais SET nombre = '
            ${this.nombre}' WHERE codigo = ${this.codigo};`
    }

    findByIdQuery(){
        return `SELECT * FROM Pais WHERE codigo = ${this.codigo};`;
    }

    static findAllQuery(){
        return `SELECT * FROM Pais;`;
    }

    static findByIdQuery(codigo:number){
        return `SELECT * FROM Pais WHERE codigo = ${codigo};`;
    }


    /* sentencia sql para crear la tabla de este modelo
    para crear una tabla hay que declarar la cadena en el 
    providers/sqlite.ts en la funcion createTables() */
    static getSqlCreteTable(){
        return `CREATE TABLE IF NOT EXISTS Pais (
            codigo integer PRIMARY KEY AUTOINCREMENT,
            nombre text NOT NULL
           );`;
    }
}