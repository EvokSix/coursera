import { Routes } from "@angular/router";

import { MenuComponent } from '../menu/menu.component';
import { LoginComponent } from "../login/login.component";
import { FullBookComponent } from "../full-book/full-book.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'fullbook/:id', component: FullBookComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
