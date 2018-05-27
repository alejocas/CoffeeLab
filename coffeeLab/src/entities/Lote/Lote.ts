import { Finca } from "../index";
export class Lote {
    public codigo:number;
    public finca:Finca;
    public area:number;
    public pluviosidad:number;

    constructor(codigo:number,finca:Finca,area:number,pluviosidad:number){
        this.codigo=codigo;
        this.finca=finca;
        this.area=area;
        this.pluviosidad=pluviosidad;
    }

    save(){
        //TODO: hacer funcion para guardar pero creo que se puede hacer un servicio
    }

    findAll(){

    }
}