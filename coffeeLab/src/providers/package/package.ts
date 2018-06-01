import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class PackageProvider {

  constructor() {
  }

  getTiposUsuarioPackage(){
    return {
      method: "GET",
      url: 'service/tipoUsuario',
      body: {}
    }
  }

  getTiposDocumentosPackage(){
    return {
      method: "GET",
      url: 'service/tipoDocumento',
      body: {}
    }
  }

}
