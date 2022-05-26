import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root',
})
export class ControleLoginService {
  usuarioLogado!: User;
  isSidebarVisible: boolean = false;

  sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.sidebarVisibilityChange.subscribe((value) => {
      this.isSidebarVisible = value;
    });
  }

  toggleSidebarVisibility() {
    this.sidebarVisibilityChange.next(!this.isSidebarVisible);
  }

  setUsuarioLogado(usuario: User){
    this.usuarioLogado = usuario;
  }

  getUsuarioLogado():User{
    return this.usuarioLogado;
  }

}
