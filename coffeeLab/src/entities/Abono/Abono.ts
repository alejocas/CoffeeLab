import { TipoAbono } from "../index";

export class Abono {
    public codigo:number;
    public nombre:string;
    public descripcion:string;
    public tipoAbono:TipoAbono;

    constructor(codigo:number,nombre:string,descripcion:string,tipoAbono:TipoAbono){
        this.codigo=codigo;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.tipoAbono=tipoAbono;
    }

    save(){

    }

    findAll(){

    }
}