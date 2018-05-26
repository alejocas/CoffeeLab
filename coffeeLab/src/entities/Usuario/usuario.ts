import { TipoDocumento, TipoUsuario } from '../index';

export class Usuario {
    private tipoDocumento:TipoDocumento;
    private numeroDocumento:number;
    private correo:string;
    private tipoUsuario:TipoUsuario;
    private usuario:string;
    private contrasena:string;
    private nombres:string;
    private apellidos:string;

    constructor(tipoDocumento:TipoDocumento, numeroDocumento:number,
         correo:string, tipoUsuario:TipoUsuario, usuario:string,
         contrasena:string, nombres:string, apellidos:string){

            this.tipoDocumento=tipoDocumento;
            this.numeroDocumento=numeroDocumento;
            this.correo=correo;
            this.tipoUsuario=tipoUsuario;
            this.usuario=usuario;
            this.contrasena=contrasena;
            this.nombres=nombres;
            this.apellidos=apellidos;
        
    }

    save(){
        //TODO: hacer funcion para guardar pero creo que se puede hacer un servicio
    }

    findAll(){
        
    }
}