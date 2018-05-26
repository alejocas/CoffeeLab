export class TipoUsuario {
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
}