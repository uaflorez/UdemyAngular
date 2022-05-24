import { Injectable } from '@angular/core';
import { Usuariou } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: Usuariou = new Usuariou();
  constructor() { 
    this.usuario.usuariouID = 1;
    this.usuario.nombreu = 'Pedro';
    this.usuario.apellidou = 'Torres';
  }
}
