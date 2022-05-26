import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

import { User } from '../shared/user';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  users!: User[];
  errMess!: string;

  constructor(private userService: UserService,
    @Inject('baseURL') public baseURL: HttpClient) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (users) => (this.users = users),
      (errmess) => (this.errMess = <any>errmess)
    );
  }

}
