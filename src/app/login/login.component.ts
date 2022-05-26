import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

import { User } from '../shared/user';
import { ControleLoginService } from '../services/controle-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users!: User[];
  logUser!: User;
  errMess!: string;
  loginForm!: FormGroup;

  constructor(
    private userService: UserService,
    private controlaLoginService: ControleLoginService,
    private fb: FormBuilder,
    private router: Router,
    @Inject('baseURL') public baseURL: HttpClient)
   {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (users) => (this.users = users),
      (errmess) => (this.errMess = <any>errmess)
    );
    this.createForm();
    }

  createForm() {
    this.loginForm = this.fb.group({
      id: '',
      name: '',
      mail: ['', Validators.required],
      password: ['', Validators.required],
      category: [''],
      point: 0,
    });
  }

  validar() {
    this.logUser = new User();
    this.logUser.mail = this.loginForm.get('mail')?.value;
    this.logUser.password = this.loginForm.get('password')?.value;
    for (let index = 0; index < this.users.length; index++) {
      if (
        this.logUser.mail == this.users[index].mail &&
        this.logUser.password == this.users[index].password
      ) {
        this.controlaLoginService.setUsuarioLogado(this.users[index]);
        this.controlaLoginService.toggleSidebarVisibility();
        this.router.navigate(["menu"]);
      }
    }
  }
}
