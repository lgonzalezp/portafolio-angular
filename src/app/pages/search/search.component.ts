import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  s: string;

  constructor(  private route: ActivatedRoute,
                public productosService: ProductosService) { }

  ngOnInit(): void {

    this.route.params
      .subscribe((params: {termino: string}) => {
        this.productosService.buscarProducto( params.termino );
        this.s = params.termino;

      });
  }

}
