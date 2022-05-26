import { Component, OnInit } from '@angular/core';
import { ControleLoginService } from '../services/controle-login.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-pontuacao',
  templateUrl: './pontuacao.component.html',
  styleUrls: ['./pontuacao.component.css']
})
export class PontuacaoComponent implements OnInit {

  user!: User;
  errMess!: string;

  constructor(private controleLoginService: ControleLoginService) { }

  ngOnInit(): void {
    this.user = this.controleLoginService.getUsuarioLogado();
    console.log(this.user);

  }

}
