import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient ) { 
    this.cargarProductos();

  }

  private cargarProductos(): void{

    this.http.get('https://angular-html-636b8-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((resp: any[]) => {

      this.productos = resp;
      console.log(resp);

      this.loading = false;

    });
  }
}
