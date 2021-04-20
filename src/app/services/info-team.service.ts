import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoTeam } from '../interfaces/info-team-interface';


@Injectable({
  providedIn: 'root'
})
export class InfoTeamService {

  info: InfoTeam = {};
  loaded = false;

  constructor( private http: HttpClient ) { 

    // Leer información del servicio
    this.http.get('https://angular-html-636b8-default-rtdb.firebaseio.com/equipo.json')
      .subscribe( (resp: InfoTeam) => {
        this.loaded = true;
        this.info = resp;
        console.log(this.info);
      } );
   }

  }
