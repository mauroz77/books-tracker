import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../book.model'
import { BooksService } from './../books.service';
import { ApiService } from  './../../api.service';

declare var $: any;

@Component({
  selector: 'app-book-cover',
  templateUrl: './book-cover.component.html',
  styleUrls: ['./book-cover.component.css']
})
export class BookCoverComponent implements OnInit {
  @Input() book: Book;
  //@Output() show = new EventEmitter<boolean>();
  @Output() showValueChange = new EventEmitter();



  private  otherBooks:  Array<object> = [];

  constructor(private booksManager: BooksService, private  apiService:  ApiService) {
    ///console.log('Call: ' + apiService.getBooks())
  }

  ngOnInit() {
  }

  showBookDetails()
  {
    console.log("Clicked cover to see details. Setting this book to be displayed:");
    console.log(this.book);
    this.apiService.setCurrentBookToEdit(this.book);
    (<any>$('.ui.modal') ).modal('show');
    this.showValueChange.emit(true);

  }

}
