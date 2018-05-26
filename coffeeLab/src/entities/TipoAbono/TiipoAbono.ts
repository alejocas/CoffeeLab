

export class TipoAbono {
    public codigo:number;
    public nombre:string;
    public descripcion:string;
    /*private db:Sqlite;*/

    constructor(codigo:number, nombre:string, descripcion:string = ""){
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    save(){
        let keys = Describer.describeClass(TipoAbono); 
        let sql = `INSERT INTO ${TipoAbono.name} [(${keys.toString()})]  
        VALUES (${this.codigo}, '${this.nombre}', '${this.descripcion}');`
        console.log(sql);

       /* this.db.executeSQL(`CREATE TABLE IF NOT EXISTS ${TipoAbono.name} (
            ${keys[0]} integer PRIMARY KEY AUTOINCREMENT,
            ${keys[1]} text NOT NULL,
            ${keys[2]} text
           );`);*/

    }
}

class Describer{

    static describeClass( typeOfClass:any){
        let a = new typeOfClass();
        let array = Object.getOwnPropertyNames(a);
        console.log(Object.getPrototypeOf(a))
        return array;//you can apply any filter here
    }
}

