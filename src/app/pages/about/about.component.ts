import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
// import { InfoTeamService } from '../../services/info-team.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( public service: InfoPaginaService ) {
  }

  ngOnInit(): void {
  }

}
