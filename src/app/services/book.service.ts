import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ProcessHTTPMsgService } from './process-httpmsg.service';

import { Book } from '../shared/book';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(
    private http: HttpClient,
    private processHTTPMsg: ProcessHTTPMsgService
  ) {}

  getBooks(): Observable<Book[]> {
    return this.http
      .get<Book[]>(baseURL + 'books')
      .pipe(catchError(this.processHTTPMsg.handleError));
  }

  getBook(id: string): Observable<Book> {
    return this.http
      .get<Book>(baseURL + 'books/' + id)
      .pipe(catchError(this.processHTTPMsg.handleError));
  }

  getFeaturedBook(): Observable<Book> {
    return this.http
      .get<Book[]>(baseURL + 'books?featured=true')
      .pipe(map((books) => books[0]))
      .pipe(catchError(this.processHTTPMsg.handleError));
  }

  getBookIds(): Observable<string[] | any> {
    return this.getBooks()
      .pipe(map((books) => books.map((book) => book.id)))
      .pipe(catchError((error) => error));
  }

  putBook(book: Book): Observable<Book>{
    const httpOpttions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<Book>(baseURL + 'books/' +  book.id, book, httpOpttions)
      .pipe(catchError(this.processHTTPMsg.handleError));
  }
}
