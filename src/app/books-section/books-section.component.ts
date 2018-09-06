import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book/book.model'
import { BooksService } from '../book/books.service';

@Component({
  selector: 'app-books-section',
  templateUrl: './books-section.component.html',
  styleUrls: ['./books-section.component.css']
})
export class BooksSectionComponent implements OnInit {

  @Input() sectionName: string;
  @Input() statusToShow: number;

  constructor(private booksManager: BooksService) { 
  }

  ngOnInit() {
  }

  getBooks()
  {
    return this.booksManager.getBooksByStatus(this.statusToShow);
  }

}
