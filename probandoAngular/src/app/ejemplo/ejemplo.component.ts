import { Component, OnInit } from '@angular/core';


class Alumno{
  nombre: string;
  apellido: string;
  // excelencia: boolean;
   
  constructor(){
    this.nombre = "nombre";
    this.apellido = "apellido";
    
  }
  
}


@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss']
})
export class EjemploComponent implements OnInit {

  alumno: Alumno = new Alumno();

  listadoAlumnos: Array<Alumno> = new Array<Alumno>();

   
  constructor() { /* TODO document why this constructor is empty */  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  
  }
  agregar() {
    this.listadoAlumnos.push({
      nombre: this.alumno.nombre,
      apellido: this.alumno.apellido,
      // excelencia: this.alumno.excelencia
    })
    this.alumno.nombre = '';
    this.alumno.apellido = '';

    console.log(this.listadoAlumnos);
  }

}
