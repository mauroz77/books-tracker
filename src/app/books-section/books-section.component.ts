import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
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
  @Output() stockValueChange = new EventEmitter();

  constructor(private booksManager: BooksService) { 
  }

  ngOnInit() {
  }

  getBooks()
  {
    return this.booksManager.getBooksByStatus(this.statusToShow);
  }

  changeStockValue(p) {
    console.log('This is propagatted from children. It means one of my clildren called the show componet...');
    this.stockValueChange.emit(true);
}

}
