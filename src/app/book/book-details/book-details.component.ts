import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder } from '@angular/forms';

import { BooksService } from './../books.service';
import { Book } from '../book.model';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Input() show: boolean;
  name: string = 'OnlyTest';

  genres = ['Fantasy', 'Fiction', 'Science fiction', 'Action and Adventure',
    'Mystery', 'Health', 'Science', 'Biographies'];
  statuses = ['Reading', 'Read', 'Planned'];
  detailsForm: FormGroup;
  @Output() stockValueChange = new EventEmitter();

  constructor(private booksManager: BooksService, private fb: FormBuilder) {
    //this.book = new Book('dummyTitle', 'dummyAuthor','Fiction', 'Reading','desc');

  }

  ngOnInit() {
    this.detailsForm = this.fb.group({
      statusControl: [this.getStatusToDisplay()], genreControl: [this.getGenreToDisplay()]
    });
    console.log('Current book when calling ngOnInit for book-details:');
    console.log(this.booksManager.getCurrentBookToEdit());
    console.log('ngOnInit was called and the following associations were done:');
    console.log(' statusControl: ' + this.getStatusToDisplay());
    console.log(' genreControl: ' + this.getGenreToDisplay());
  }

  ngAfterContentInit() {
    console.log('ESTAN AHÍ, ME ESCUCHAN???');
  }

  ngOnChanges() {
    console.log('My value changed....................');
    console.log('value of show '+this.show);
    this.detailsForm = this.fb.group({
      statusControl: [this.getStatusToDisplay()], genreControl: [this.getGenreToDisplay()]
    });
}

  saveBookDetails(
    title: HTMLInputElement,
    author: HTMLInputElement,
    genre: HTMLInputElement,
    status: HTMLInputElement,
    notes: HTMLInputElement): boolean {

    let aBook = this.booksManager.findBook(title.value);
    if (aBook === null) {
      console.log('Book did not exist. Addig book:');
      let newBook: Book = new Book(title.value, author.value, genre.value, status.value, notes.value);
      console.log(newBook);
      this.booksManager.addNewBook(newBook);
    }
    else {
      aBook.title = title.value;
      aBook.author = author.value;
      aBook.genre = genre.value;
      aBook.status = status.value;
      aBook.description = notes.value;
      console.log('Book existed. Uodating book:');
      console.log(aBook);

    }

    //<any>($(".ui.modal")).modal('hide');
    (<any>$('.ui.modal')).modal('hide');
    this.stockValueChange.emit(false);
    console.log('Saved!');

    return false;
  }

  closeBookDetails(): void{
    (<any>$('.ui.modal')).modal('hide');
    this.stockValueChange.emit(false);
    console.log('Closed by cancel!');
  }

  getTitleToDisplay(): string {
    let result = '';

    if (this.booksManager.getCurrentBookToEdit() != undefined) {
      result = this.booksManager.getCurrentBookToEdit().title;
    }
    return result;
  }

  getAuthorToDisplay(): string {
    let result = '';
    if (this.booksManager.getCurrentBookToEdit() != undefined) {
      result = this.booksManager.getCurrentBookToEdit().author;
    }
    return result;
  }

  getGenreToDisplay(): string {
    let result = '';
    if (this.booksManager.getCurrentBookToEdit() != undefined) {
      result = this.booksManager.getCurrentBookToEdit().genre;
    }
    //console.log('Genre to display' + result);
    return result;
  }

  getStatusToDisplay(): string {
    let result = '';
    if (this.booksManager.getCurrentBookToEdit() != undefined) {
      result = this.booksManager.getCurrentBookToEdit().status;
    }
    //console.log('Status to display: ' + result);
    return result;
  }

  getDescriptionToDisplay(): string {
    let result = '';
    if (this.booksManager.getCurrentBookToEdit() != undefined) {
      result = this.booksManager.getCurrentBookToEdit().description;
    }
    return result;
  }

}
