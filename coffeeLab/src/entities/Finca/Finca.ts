import { Municipio, TipoClima } from '../index';

export class Finca {
    private nombre:string;
    private tempPromedio:number;
    private altitud:number;
    private municipio:Municipio;
    private tipoClima:TipoClima;

    constructor(nombre:string, tempPromedio:number,
         altitud:number, municipio:Municipio, tipoClima:TipoClima){

            this.nombre=nombre;
            this.tempPromedio=tempPromedio;
            this.altitud=altitud;
            this.municipio=municipio;
            this.tipoClima=tipoClima;
    }

    save(){
        //TODO: hacer funcion para guardar pero creo que se puede hacer un servicio
    }

    findAll(){
        
    }
}