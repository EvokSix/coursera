import { Component, OnInit, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { BookService } from '../services/book.service';
import { flyInOut, expand, visibility } from '../animations/app.animation';

import { Book } from '../shared/book';

@Component({
  selector: 'app-full-book',
  templateUrl: './full-book.component.html',
  styleUrls: ['./full-book.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
    animations: [
      flyInOut(),
      visibility(),
      expand()
    ]
})
export class FullBookComponent implements OnInit {

  book!: Book;
  errMess!: string;
  bookIds!: string[];
  prev!: string;
  next!: string;
  bookcopy!: Book;
  visibility = 'shown';

  constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('baseURL') public baseURL:HttpClient) { }

  ngOnInit(): void {
    this.bookService.getBookIds()
      .subscribe((bookIds) => this.bookIds = bookIds);
    this.route.params
      .pipe(switchMap((params: Params) => { this.visibility = 'hidden'; return this.bookService.getBook(params['id']); }))
      .subscribe(book => { this.book = book; this.bookcopy = book; this.setPrevNext(book.id); this.visibility = 'shown'; },
      errmess => this.errMess = <any> errmess);
  }

  setPrevNext(bookId: string){
    const index = this.bookIds.indexOf(bookId);
    this.prev = this.bookIds[(this.bookIds.length + index - 1) % this.bookIds.length];
    this.next = this.bookIds[(this.bookIds.length + index + 1) % this.bookIds.length];
  }

  goBack(): void {
    this.location.back();
  }

}
