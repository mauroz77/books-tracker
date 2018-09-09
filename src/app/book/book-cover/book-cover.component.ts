import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../book.model'
import { ApiService } from './../../api.service';

declare var $: any;

@Component({
  selector: 'app-book-cover',
  templateUrl: './book-cover.component.html',
  styleUrls: ['./book-cover.component.css']
})
export class BookCoverComponent implements OnInit {
  @Input() book: Book;
  @Output() showValueChange = new EventEmitter();

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }

  showBookDetails() {
    console.log("Clicked cover to see details. Setting this book to be displayed:");
    console.log(this.book);
    this.apiService.setCurrentBookToEdit(this.book);
    (<any>$('.ui.modal')).modal('show');
    this.showValueChange.emit(true);
  }

  deleteBook() {
    if (confirm("Do you really want to delete the book '" + this.book.title + "'?")) {
      this.apiService.deleteBook(this.book._id).subscribe((response) => {
        console.log('RESPONSE delete: ' + response);
      });

      var that = this;
      setTimeout(function () {
        that.apiService.getBooks().subscribe((data: Array<object>) => {
          let allTheBooks = data as Book[];
          that.apiService.setAllTheBooks(allTheBooks);
        });
      }, 1000);
    }
  }

}
