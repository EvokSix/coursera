import { Routes } from "@angular/router";

import { MenuComponent } from '../menu/menu.component';
import { LoginComponent } from "../login/login.component";
import { FullBookComponent } from "../full-book/full-book.component";
import { RankingComponent } from "../ranking/ranking.component";
import { PontuacaoComponent } from "../pontuacao/pontuacao.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'fullbook/:id', component: FullBookComponent},
  { path: 'ranking', component: RankingComponent},
  { path: 'pontuacao', component: PontuacaoComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
