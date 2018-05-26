import { Usuario, Finca } from '../index';

export class UsuarioxFinca {
    private usuario:Usuario;
    private finca:Finca;
    

    constructor(usuario:Usuario, finca:Finca,
         ){

            this.usuario=usuario;
            this.finca=finca;
           
        
    }

    save(){
        //TODO: hacer funcion para guardar pero creo que se puede hacer un servicio
    }

    findAll(){
        
    }
}