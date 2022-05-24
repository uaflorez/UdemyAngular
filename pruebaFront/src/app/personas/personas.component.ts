import { Component } from "@angular/core";

@Component({
	selector: 'app-personas',
	templateUrl: './personas.component.html',
	styleUrls: ['./personas.component.scss']
})

export class PersonasComponent{
	desabilitar = false;
	mensaje = 'No se a agregado ninguna persona';
	titulo = '';
	mostrar = false;

	agregarPersona() {
		this.mostrar = false;
		this.mensaje = 'Persona Agregada';
	}
	// Este es el concepto de event binding va en () y el de properti binding va en []
	// esto va en el html  (input)="modificarTitulo($event)" dentro del input
	// modificarTitulo(event: Event) {
	// 	this.titulo = (<HTMLInputElement>event.target).value;
	// }

}