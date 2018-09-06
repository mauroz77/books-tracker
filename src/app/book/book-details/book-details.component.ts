import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder }   from '@angular/forms';


import { BooksService } from './../books.service';
import { Book } from '../book.model';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Input() book: Book;
  name: string = 'OnlyTest';

  genres = ['Fantasy',  'Fiction', 'Science fiction', 'Action and Adventure', 'Mystery', 'Health', 'Science', 'Biographies'];
  statuses = ['Reading', 'Read', 'Planned'];
  detailsForm: FormGroup;

  constructor(private booksManager: BooksService, private fb: FormBuilder) {
    this.book = new Book('dummyTitle', 'dummyAuthor','Fiction', 'Reading','desc');
   }

  ngOnInit() {
    this.detailsForm = this.fb.group({
      statusControl: [this.getStatusToDisplay()], genreControl: [this.getGenreToDisplay()]
    });
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
      new Book(title.value, author.value, genre.value, status.value, notes.value))
      
    return false;
  }

  getTitleToDisplay(): string
  {
    let result = '';
    console.log(this.book);
    if (this.book != undefined)
    {
      result = this.book.title;
    }
    return result;
  }

  getAuthorToDisplay(): string
  {
    let result = '';
    if (this.book != undefined)
    {
      result = this.book.author;
    }
    return result;
  }

  getGenreToDisplay(): string
  {
    let result = '';
    if (this.book != undefined)
    {
      result = this.book.genre;
    }
    console.log('Genre: ' + result);
    return result;
  }

  getStatusToDisplay(): string
  {
    let result = '';
    if (this.book != undefined)
    {
      result = this.book.status;
    }
    return result;
  }

  getDescriptionToDisplay(): string
  {
    let result = '';
    if (this.book != undefined)
    {
      result = this.book.description;
    }
    return result;
  }

}
