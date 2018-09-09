import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../book/book.model'
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-books-section',
  templateUrl: './books-section.component.html',
  styleUrls: ['./books-section.component.css']
})
export class BooksSectionComponent implements OnInit {

  @Input() sectionName: string;
  @Input() statusToShow: string;
  @Output() showValueChange = new EventEmitter();

  private allTheBooks: Book[] = [];

  constructor(private apiService:  ApiService) {
  }

  ngOnInit() {
    this.initBooks();
  }

  public initBooks() {
    this.apiService.getBooks().subscribe((data: Array<object>) => {
      this.allTheBooks = data as Book[];
    });
  }

  public getBooksByStatus(status: string): Book[] {
    return this.allTheBooks.filter(book => book.status == status)
  }

  getBooks() {
   //console.log('From Book Section called getBooks()');
    return this.apiService.getBooksByStatus (this.statusToShow);
  }

  // Method used by children components to notify that the book-details visibility status has changed
  changeShowValue(showStatus: boolean) {
    this.showValueChange.emit(showStatus);
  }

}
