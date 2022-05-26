import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleLoginService } from '../services/controle-login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  statusAtual: boolean = false;

  constructor(private controlaLoginService: ControleLoginService,
    private router: Router) {
    this.statusAtual = this.controlaLoginService.isSidebarVisible;
    console.log(this.statusAtual);
    if(!this.statusAtual){
      this.router.navigate(["login"]);
    }
  }

  ngOnInit(): void {
    this.controlaLoginService.sidebarVisibilityChange.subscribe((userLogged) => {
      this.statusAtual = userLogged;
      if(!userLogged){
        this.router.navigate(["login"]);
      }
    });
  }

  deslogaUsuario(){
    this.controlaLoginService.toggleSidebarVisibility();
    console.log(this.statusAtual);

  }
}
