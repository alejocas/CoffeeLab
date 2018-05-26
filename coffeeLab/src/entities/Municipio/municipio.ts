import { Departamento } from '../index';

export class Municipio {
    private codigo:number;
    private nombre:string;
    private departamento:Departamento;

    constructor(codigo:number, nombre:string, departamento:Departamento){
        this.codigo = codigo;
        this.nombre = nombre;
        this. departamento = departamento;
    }

    save(){
        //TODO: hacer funcion para guardar pero creo que se puede hacer un servicio
    }

    findAll(){
        
    }
}