export class Pais {
    private codigo:number;
    private nombre:string;

    constructor(codigo:number, nombre:string){
        this.codigo = codigo;
        this.nombre = nombre;
    }

    save(){
        //TODO: hacer funcion para guardar pero creo que se puede hacer un servicio
    }
}