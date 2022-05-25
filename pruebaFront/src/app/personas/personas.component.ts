import { Component } from "@angular/core";
import { Persona } from "../persona.model";

@Component({
	selector: 'app-personas',
	templateUrl: './personas.component.html',
	styleUrls: ['./personas.component.scss']
})

export class PersonasComponent{
	titulo = 'Listado de personas'
	personas: Persona[] = [
		new Persona('Santiago', 'Florez'),
		new Persona('Milena', 'Baquero'),
		new Persona('Eliana', 'Florez')
	];
	nombreInput: string = '';
	apellidoInput: string = '';

	agregarPersona() {
		let persona1 = new Persona(this.nombreInput, this.apellidoInput);
		this.personas.push(persona1);
	}

	// Este es el concepto de event binding va en () y el de properti binding va en []
	// esto va en el html  (input)="modificarTitulo($event)" dentro del input
	// modificarTitulo(event: Event) {
	// 	this.titulo = (<HTMLInputElement>event.target).value;
	// }

}