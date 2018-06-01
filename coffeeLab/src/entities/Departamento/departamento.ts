import { Pais } from '../index';

export class Departamento {
    private codigo:number;
    private nombre:string;
    private pais:Pais;

    constructor(codigo:number, nombre:string, pais:Pais){
        this.codigo = codigo;
        this.nombre = nombre;
        this.pais = pais;
    }

    save(){
        //TODO: hacer funcion para guardar pero creo que se puede hacer un servicio
    }

    findAll(){
        
    }
}