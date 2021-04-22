import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDetalle } from '../../interfaces/producto-detalle.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html',
  styleUrls: ['./portafolio-item.component.css']
})
export class PortafolioItemComponent implements OnInit {

  producto: ProductoDetalle = {};
  id: string;

  constructor( private route: ActivatedRoute,
               public productosService: ProductosService) { }

  ngOnInit(): void {

    this.route.params
      .subscribe(
        {
          next: (parametros: { id: string }) => {
            this.productosService.cargarProductoDetalle(parametros.id)
            .subscribe(
              (producto: ProductoDetalle) => {
                this.id = parametros.id;
                this.producto = producto;
                // console.log(parametros);

            });
          },
          error: () => {console.log('error cargando el detalle del producto desde el servicio');
          }
      });
      /* .subscribe( (parametros: string) => {

        this.productosService.cargarProductoDetalle(parametros['id'])
          .subscribe((producto: ProductoDetalle) => {
            this.id = parametros['id'];
            console.log('id:', this.id);
            this.producto = producto;

          });

      }); */

      /*
      .subscribe({
            complete: () => { ... }, // completeHandler
            error: () => { ... },    // errorHandler 
            next: () => { ... },     // nextHandler
            someOtherProperty: 42
        });
      */

  }

}
