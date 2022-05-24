import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../services/user.service';

import { User } from '../shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  users!: User[];
  logUser!: User;
  errMess!: string;
  loginForm!: FormGroup;
  form!: FormGroup;

  @ViewChild('loginForm') loginFormDirective!:NgForm;

  constructor(private userService: UserService,
    private fb: FormBuilder,
    @Inject('baseURL') public baseURL: HttpClient) { }

  ngOnInit(): void {
  }

  createForm(){
    this.form = this.fb.group({
      mail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  validar(){
    this.createForm();
    this.userService.getUsers()
      .subscribe((users) => this.users = users,
      errmess => this.errMess = <any>errmess);
    this.logUser = new User();
    this.logUser = this.form.value;
    console.log(this.logUser.mail);
    console.log(this.logUser.password);
  }

}
