export class TipoDocumento {
    private codigo:number;
    private nombre:string;
    private descripcion:string;

    constructor(codigo:number, nombre:string, descripcion:string){
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    save(){
        //TODO: hacer funcion para guardar pero creo que se puede hacer un servicio
    }

    static getSqlCreteTable(){
        return `CREATE TABLE IF NOT EXISTS TipoDocumento (
            codigo integer PRIMARY KEY AUTOINCREMENT,
            nombre text NOT NULL,
            descripcion text
           );`;
    }
}