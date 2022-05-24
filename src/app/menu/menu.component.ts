import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from '../shared/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  books!: Book[];
  errMess!: string;

  constructor(private bookService: BookService,
    @Inject('baseURL') public baseURL: HttpClient) { }

  ngOnInit(): void {
    this.bookService.getBooks()
      .subscribe((books) => this.books = books,
      errmess => this.errMess = <any>errmess);
  }

}
