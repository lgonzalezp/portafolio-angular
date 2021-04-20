import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // pageInfo: any = {};

  constructor(  public service: InfoPaginaService ) { 

    // this.pageInfo = service.info;

   }

  ngOnInit(): void {
  }

}
