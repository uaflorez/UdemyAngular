import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() resultadoSuma = new EventEmitter<number>();
  operandoA: number = 0;
  operandoB: number = 0;
  
  
  sumar() {
    let resultado = this.operandoA + this.operandoB;
    this.resultadoSuma.emit(resultado);
    
  }
  constructor() { /* TODO document why this constructor is empty */  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  
  }

}
