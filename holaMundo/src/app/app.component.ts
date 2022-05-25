import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicación de Calculadora';
  
  resultadoPadre: number = 0;

  resultadoHijo(resultado: number) {
    this.resultadoPadre = resultado;
  }

}
