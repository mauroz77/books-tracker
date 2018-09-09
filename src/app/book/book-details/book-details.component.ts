import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder } from '@angular/forms';

import { BooksService } from './../books.service';
import { Book } from '../book.model';
import { ApiService } from '../../api.service';

declare var $: any;

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Input() show: boolean;

  genres = this.apiService.getGenres();
  statuses = this.apiService.getStatuses();
  
  detailsForm: FormGroup;
  @Output() showValueChange = new EventEmitter();

  constructor(private fb: FormBuilder, private apiService: ApiService) {
  }

  ngOnInit() {
    this.setSelectedValuesInDropdowns();
  }

  ngOnChanges() {
    this.setSelectedValuesInDropdowns();
  }

  private setSelectedValuesInDropdowns(): void {
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

    let aBook = this.apiService.findBook(title.value);
    if (aBook === null) {
      console.log('Book did not exist. Addig book:');
      let newBook: Book = new Book(title.value, author.value, genre.value, status.value, notes.value);
      console.log(newBook);
      //this.apiService.addNewBook(newBook);
      this.addBook(newBook);
    }
    else {
      aBook.title = title.value;
      aBook.author = author.value;
      aBook.genre = genre.value;
      aBook.status = status.value;
      aBook.description = notes.value;

      console.log('Book existed. Updating book:');
      this.updateBook(aBook);

      console.log(aBook);
    }

    this.hideComponentAndEmitStatus();

    var that = this;
    setTimeout(function () {
      that.apiService.getBooks().subscribe((data: Array<object>) => {
        let allTheBooks = data as Book[];
        that.apiService.setAllTheBooks(allTheBooks);
      });
  }, 1000);

    return false;
  }

  addBook(book: Book) {
    var bookPayLoad = {
      title: book.title,
      author: book.author,
      genre: book.genre,
      status: book.status,
      description: book.description
    };
    this.apiService.createBook(bookPayLoad).subscribe((response) => {
      console.log('(1) I create the book: ');
      console.dir(response);
    });
  }

  updateBook(book: Book) {
    var bookPayLoad = {
      title: book.title,
      author: book.author,
      genre: book.genre,
      status: book.status,
      description: book.description
    };
    this.apiService.updateBook(book).subscribe((response) => {
      console.log('RESPONSE for updating:');
      console.dir(response);
    });
  }


  closeBookDetails(): void {
    this.hideComponentAndEmitStatus();
  }

  private hideComponentAndEmitStatus(): void {
    (<any>$('.ui.modal.modal_details')).modal('hide');

    this.showValueChange.emit(false);
  }

  getTitleToDisplay(): string {
    let result = '';

    if (this.apiService.getCurrentBookToEdit() != undefined) {
      result = this.apiService.getCurrentBookToEdit().title;
    }
    return result;
  }

  getAuthorToDisplay(): string {
    let result = '';
    if (this.apiService.getCurrentBookToEdit() != undefined) {
      result = this.apiService.getCurrentBookToEdit().author;
    }
    return result;
  }

  getGenreToDisplay(): string {
    let result = '';
    if (this.apiService.getCurrentBookToEdit() != undefined) {
      result = this.apiService.getCurrentBookToEdit().genre;
    }
    return result;
  }

  getStatusToDisplay(): string {
    let result = '';
    if (this.apiService.getCurrentBookToEdit() != undefined) {
      result = this.apiService.getCurrentBookToEdit().status;
    }

    return result;
  }

  getDescriptionToDisplay(): string {
    let result = '';
    if (this.apiService.getCurrentBookToEdit() != undefined) {
      result = this.apiService.getCurrentBookToEdit().description;
    }
    return result;
  }
}
