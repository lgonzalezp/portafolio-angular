import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // pageInfo: any = {};

  constructor(  public service: InfoPaginaService,
                private router: Router ) {

    // this.pageInfo = service.info;

   }

  ngOnInit(): void {
  }


  buscarProducto( termino: string ): void{
    if (termino.length < 1){
      return;
    }

    this.router.navigate(['search', termino]);

  }

}
