import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {

  nombre: string = 'Eliana';
  apellido: string = 'Florez';

  alumno: any = {
    nombre: 'carlos ',
    apellido: 'Pinzon',
    edad: 25
  }

  imagen: string = "https://media.istockphoto.com/photos/programming-source-code-on-digital-screen-software-developer-and-picture-id1336271758?b=1&k=20&m=1336271758&s=170667a&w=0&h=HoJqtqo1r54eZf9G4OqBXRHXLsYoD0X9wMR-vXFBiTE=";
  
  inputNuevo: string = "Este es un property binding";

  correo: string = ''
  password:string = ''


  constructor() { /* TODO document why this constructor is empty */  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  
  }

  ingresar(evento: any) {
     if (evento.key == "Enter") {
      console.log("ingresando al sistema")
    }
  }
  iniciar() {
    console.log(this.correo)
    console.log(this.password)
  }

  llamarAlert() {
    alert('ha echo doble click')
  }
  escribirModelo() {
    console.log(this.password)
  }
  escribirCorreo() {
    console.log(this.correo)
  }
  escribir(evento:any) {
    console.log(evento.target.value)
  }
  colorearBorde(evento:any) {
    evento.srcElement.style.border = "1px solid red"
    evento.srcElement.style.width = "250px"
  }

  cambiarTamano(evento:any) {
    evento.srcElement.style.width = "200px"
    evento.srcElement.style.height = "200px"
    evento.srcElement.style.border = "1.5px solid red"
  }
  incrementarTamano(evento:any) {
    evento.srcElement.style.width = "400px"
    evento.srcElement.style.height = "400px"
    evento.srcElement.style.border = "1.5px solid green"
  }
}
