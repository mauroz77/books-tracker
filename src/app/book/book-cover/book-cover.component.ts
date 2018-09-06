import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book.model'

@Component({
  selector: 'app-book-cover',
  templateUrl: './book-cover.component.html',
  styleUrls: ['./book-cover.component.css']
})
export class BookCoverComponent implements OnInit {
  @Input() book: Book;

  constructor() {
  }

  ngOnInit() {
  }

  holi()
  {
    console.log("Holi");
  }

}
