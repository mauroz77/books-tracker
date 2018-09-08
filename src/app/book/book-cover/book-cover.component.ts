import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../book.model'
import { BooksService } from './../books.service';

@Component({
  selector: 'app-book-cover',
  templateUrl: './book-cover.component.html',
  styleUrls: ['./book-cover.component.css']
})
export class BookCoverComponent implements OnInit {
  @Input() book: Book;
  @Output() show = new EventEmitter<boolean>();
  @Input() stock: number;
  @Output() stockValueChange = new EventEmitter();

  constructor(private booksManager: BooksService) {
  }

  ngOnInit() {
  }

  showBookDetails()
  {
    console.log("Clicked cover to see details. Setting this book to be displayed:");
    console.log(this.book);
    this.booksManager.setCurrentBookToEdit(this.book);
    (<any>$('.ui.modal') ).modal('show');

    this.show.emit(true);
    console.log('I emmitedd................');
    this.stockValueChange.emit(true);

  }

  ngOnChanges() {
    console.log('ngOnChanges called');
}

}
