import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(public UsuarioInyectado: UsuarioService) { }

  ngOnInit(): void {
    this.UsuarioInyectado.usuario.nombreu;
  }

}
