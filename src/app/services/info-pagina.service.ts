import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  loaded = false;

  constructor( private http: HttpClient ) {
    // console.log('Serivicio cargado!');

    // Leer información del servicio
    this.http.get('assets/data/data-params.json')
      .subscribe( (resp: InfoPagina) => {
        this.loaded = true;
        this.info = resp;
        console.log(this.info);
      } );
   }
}
