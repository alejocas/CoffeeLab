import { Describer } from "../../utils/Describer";
import { Sqlite } from '../../providers/sqlite/sqlite'

export class TipoAbono {
    public codigo:number;
    public nombre:string;
    public descripcion:string;

    constructor(codigo:number, nombre:string, descripcion:string = ""){
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;

    }

    save(){
    
        // let sql = `INSERT INTO ${TipoAbono.name} [(${this.keys.toString()})]  
        // VALUES (${this.codigo}, '${this.nombre}', '${this.descripcion}');`
        //console.log(this.insert);

       /* this.db.executeSQL(`CREATE TABLE IF NOT EXISTS ${TipoAbono.name} (
            ${keys[0]} integer PRIMARY KEY AUTOINCREMENT,
            ${keys[1]} text NOT NULL,
            ${keys[2]} text
           );`);*/

    }
    
    toArray(){
        return [this.codigo, this.nombre, this.descripcion];
    }

    static getSqlCreteTable(){
        return `CREATE TABLE IF NOT EXISTS TipoAbono (
            codigo integer PRIMARY KEY AUTOINCREMENT,
            nombre text NOT NULL,
            descripcion text
            );`;
    }

    getSqlInsert(){
        return "INSERT INTO `TipoAbono`(`codigo`,`nombre`,`descripcion`) VALUES ("+ 
            this.codigo +",'"+this.nombre+"','"+this.descripcion +"');";
    }

    static getSqlSelectAll(){
        return "SELECT * FROM `TipoAbono`;"
    }


}



