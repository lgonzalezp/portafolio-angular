import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina-interface';
import { InfoTeam } from '../interfaces/info-team-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  team: InfoTeam[] = [];
  loaded = false;

  constructor( private http: HttpClient ) {

      this.cargarInfoPagina();
      this.cargarInfoTeam();
   }

   private cargarInfoPagina(): void{
      // Leer información del servicio
      this.http.get('assets/data/data-params.json')
      .subscribe( (resp: InfoPagina) => {
        this.loaded = true;
        this.info = resp;
      } );
   }

   private cargarInfoTeam(): void{
      // Leer información del servicio
      this.http.get('https://angular-html-636b8-default-rtdb.firebaseio.com/equipo.json')
      .subscribe( (resp: InfoTeam[] ) => {
        this.team = resp;
      } );
   }
}
