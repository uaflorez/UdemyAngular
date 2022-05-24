import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../models/articulo';



@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {
  articulos: Array<Articulo> = new Array<Articulo>();
  constructor(private ruta: Router) {/**para que no de error  */ }

  ngOnInit(): void {
    this.articulos.push(
      { nombre: 'Televisor 24 pulgadas', descripcion: 'Marca samsung 4 años de garantia', stock: 20, precio: 1500, precioMayorista: 1400 },
      { nombre: 'laptop', descripcion: 'Marca samsung de 14 pulgadas', stock:50, precio: 2500, precioMayorista: 2400 },
      { nombre: 'Camara Digital', descripcion: 'Marca Cannon 6 años de garantia', stock:100, precio: 3500, precioMayorista: 3350 }
    )
  }
  pasarParametro(articuloRecibido: Articulo) {
    this.ruta.navigate(['articuloDetalle', {articulo: JSON.stringify(articuloRecibido)}])
  }

}
