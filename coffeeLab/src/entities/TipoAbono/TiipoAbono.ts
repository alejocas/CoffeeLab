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
        let keys = Describer.describeClass(TipoAbono); 
        let sql = `INSERT INTO ${TipoAbono.name} [(${keys.toString()})]  
        VALUES (${this.codigo}, '${this.nombre}', '${this.descripcion}');`
        console.log(sql);

        keys.forEach(key => {
            console.log(this[key].typeOf);
        });
    }
}

class Describer{

    static describeClass( typeOfClass:any){
        let a = new typeOfClass();
        let array = Object.getOwnPropertyNames(a);
        console.log(Object.getPrototypeOf(a))
        return array;//you can apply any filter here
    }
}

