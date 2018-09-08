import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book/book.model'
import { BooksService } from '../book/books.service';

@Component({
  selector: 'app-books-section',
  templateUrl: './books-section.component.html',
  styleUrls: ['./books-section.component.css']
})
export class BooksSectionComponent implements OnInit {

  @Input() sectionName: string;
  @Input() statusToShow: string;
  @Output() showValueChange = new EventEmitter();

  constructor(private booksManager: BooksService) {
  }

  ngOnInit() {
  }

  getBooks() {
    return this.booksManager.getBooksByStatus(this.statusToShow);
  }

  // Method used by children components to notify that the book-details visibility status has changed
  changeShowValue(showStatus: boolean) {
    this.showValueChange.emit(showStatus);
  }

}
