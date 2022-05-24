import { Routes } from "@angular/router";

import { MenuComponent } from '../menu/menu.component';
import { LoginComponent } from "../login/login.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'menu', component: MenuComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
