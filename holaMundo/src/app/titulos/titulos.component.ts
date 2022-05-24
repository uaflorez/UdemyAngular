import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit {
  nombre: string = 'Maria';
  apellido: string = 'Llinas';

  alumno: any = {
    nombre: 'carlos ',
    apellido: 'Pinzon',
    edad: 25
  }

  imagen: string = "https://media.istockphoto.com/photos/programming-source-code-on-digital-screen-software-developer-and-picture-id1336271758?b=1&k=20&m=1336271758&s=170667a&w=0&h=HoJqtqo1r54eZf9G4OqBXRHXLsYoD0X9wMR-vXFBiTE=";
  
  inputNuevo: string = "Este es un property binding";

  constructor() { }

  ngOnInit(): void {
  }

}
