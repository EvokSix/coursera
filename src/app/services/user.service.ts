import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ProcessHTTPMsgService } from './process-httpmsg.service';

import { User } from '../shared/user';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private processHTTPMsg: ProcessHTTPMsgService
  ) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(baseURL + 'users')
      .pipe(catchError(this.processHTTPMsg.handleError));
  }

  getUser(id: string): Observable<User> {
    return this.http
      .get<User>(baseURL + 'users/' + id)
      .pipe(catchError(this.processHTTPMsg.handleError));
  }

  getFeaturedUser(): Observable<User> {
    return this.http
      .get<User[]>(baseURL + 'users?featured=true')
      .pipe(map((users) => users[0]))
      .pipe(catchError(this.processHTTPMsg.handleError));
  }

  getUserIds(): Observable<string[] | any> {
    return this.getUsers()
      .pipe(map((users) => users.map((user) => user.id)))
      .pipe(catchError((error) => error));
  }

  putUser(user: User): Observable<User>{
    const httpOpttions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<User>(baseURL + 'users/' +  user.id, user, httpOpttions)
      .pipe(catchError(this.processHTTPMsg.handleError));
  }
}
