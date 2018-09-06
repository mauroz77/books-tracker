import { Component, OnInit } from '@angular/core';

import { BooksService } from './../books.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private booksManager: BooksService) { }

  ngOnInit() {
  }

  saveBookDetails(
    title: HTMLInputElement,
    author: HTMLInputElement,
    genre: HTMLInputElement,
    status: HTMLInputElement,
    notes: HTMLInputElement) : boolean { 
    console.log(`Adding book title: ${title.value} and author: ${author.value} 
      genre ${genre.value} status ${status.value} notes ${notes.value}`); 

    this.booksManager.allTheBooks.push(
      new Book(title.value, author.value, Number(genre.value), Number(status.value), notes.value))
      
    return false;
  }

}
