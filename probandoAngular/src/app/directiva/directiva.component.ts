import { Component, OnInit } from '@angular/core';

interface Producto{
  nombre: string;
  stock: number;
  fabricante: string;
  fechaVence: Date;
  esImportante: boolean;
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {
  cargando: boolean = true;
  nombres: Array<string> = ["Ana", "Milena", "Eliana", "Emili", "Alana", "Ana Maria"];
  pestana: string = '';
  productos: Array<Producto> = [
    {
      nombre: 'Arroz',
      stock: 15,
      fabricante: 'Flor Huila',
      fechaVence: new Date('02/02/2023'),
      esImportante: true
    },
    {
      nombre: 'Lenteja',
      stock: 153,
      fabricante: 'lenteja Huila',
      fechaVence: new Date('02/04/2023'),
      esImportante: false
    },
    {
      nombre: 'Garbazo',
      stock: 53,
      fabricante: 'Garbanzo Huila',
      fechaVence: new Date('02/06/2023'),
      esImportante: true
    },
    {
      nombre: 'Frijol',
      stock: 36,
      fabricante: 'Frojiol Huila',
      fechaVence: new Date('02/08/2023'),
      esImportante: false
    }
  ];
  mostrarCuadrado: boolean = false;

  constructor() { /* TODO document why this constructor is empty */  }

  ngOnInit(): void {
    setTimeout(() => { 
      this.cargando = false;
    }, 5000);
  }
  alternar() {
    this.cargando = !this.cargando;
  }
  cambiarPestana(pestana: string) {
    this.pestana = pestana; 
  }
  alternarFondo() {
    this.mostrarCuadrado = !this.mostrarCuadrado;
  }

}
