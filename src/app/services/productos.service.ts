import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';




@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading = true;
  productos: Producto[] = [];
  productoSearch: Producto[] = [];

  constructor( private http: HttpClient ) { 
    this.cargarProductos();

  }

  cargarProductos(){

    return new Promise( ( resolve, reject ) => {

      this.http.get('https://angular-html-636b8-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: any[]) => {
          this.productos = resp;
          this.loading = false;
          resolve('Promise resolved');
      });

    } );


  }

  cargarProductoDetalle( idProducto: string ): any{

    return this.http.get(`https://angular-html-636b8-default-rtdb.firebaseio.com/productos/${idProducto}.json`);
  }


  buscarProducto( termino: string): void {

    termino = termino.toLowerCase();

    if (this.productos.length === 0){
      // cargar productos
      this.cargarProductos().then ( () => {
        // se ejecuta despues de cargar los productos
        // aplicar filtro
        this.filtrarProductos(termino);
      } );
    } else{
      // filtrar los productos
      this.filtrarProductos(termino);
    }

  }

  private filtrarProductos( termino: string): void{
    this.productoSearch = [];

    this.productos.forEach( prod => {

      if (prod.categoria.toLowerCase().indexOf( termino ) >= 0 || prod.titulo.toLowerCase().indexOf( termino ) >= 0 ){
        this.productoSearch.push(prod);
      }
    });
  }
}
