import { Lote, Abono } from "../index";
export class RegistroAbono{
    public lote:Lote;
    public abono:Abono;
    public fecha:Date;
    constructor(lote:Lote,abono:Abono,fecha:Date) {
        this.lote=lote;
        this.abono=abono;
        this.fecha=fecha;
    }

    public save(){
        
        let sql = `INSERT INTO ${RegistroAbono.name} [(${Lote.name}, ${Abono.name}, ${Object.keys(this.fecha)[0]})]  
        VALUES (${this.lote.codigo}, ${this.abono}, ${this.lote});`
        console.log(sql);
    }
    
    public findAll(){

    }
}