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

  getTiposClimaPackage(){
    return {
      method: "GET",
      url: 'service/tipoClima',
      body: {}
    }
  }

  getTiposAbonoPackage(){
    return {
      method: "GET",
      url: 'service/tipoAbono',
      body: {}
    }
  }

  getTiposSemillaPackage(){
    return {
      method: "GET",
      url: 'service/tipoSemilla',
      body: {}
    }
  }

  getAbonosPackage(){
    return {
      method: "GET",
      url: 'service/abono',
      body: {}
    }
  }

  getPaisesPackage(){
    return {
      method: "GET",
      url: 'service/paises',
      body: {}
    }
  }

  getDepartaentosPackage(){
    return {
      method: "GET",
      url: 'service/departamentos',
      body: {}
    }
  }

  getMunicipiosPackage(){
    return {
      method: "GET",
      url: 'service/municipios',
      body: {}
    }
  }

  getResetPasswordPackage(body){
    return {
      method: "POST",
      url: 'service/recordarContrasena',
      body: body
    }
  }
}
