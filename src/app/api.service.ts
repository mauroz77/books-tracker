import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from './book/book.model'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'https://serene-sands-35839.herokuapp.com/';
  allTheBooks: Book[] = [];
  currentBookToEdit: Book;

  constructor(private httpClient: HttpClient) {
    this.initBooks();
  }

  public initBooks() {
    this.getBooks().subscribe((data: Array<object>) => {
      this.allTheBooks = data as Book[];
      //console.log(data);
    });
  }

  getBooks() {
    return this.httpClient.get(`${this.API_URL}/books/`);
  }

  createBook(book) {
    return this.httpClient.post(`${this.API_URL}/books/`, book);
  }

  updateBook(book) {
    return this.httpClient.post(`${this.API_URL}/books/update`, book);
  }

  public getBooksByStatus(status: string): Book[] {
    return this.allTheBooks.filter(book => book.status == status)
  }

  public findBook(name: string): Book {
    let x = this.allTheBooks.filter(book => book.title === name);
    if (x.length > 0) {
      return x[0];
    }
    else {
      return null;
    }
  }

  public addNewBook(newBook: Book): void {
    this.allTheBooks.push(newBook);
  }

  public setCurrentBookToEdit(currentBook): void {
    this.currentBookToEdit = currentBook;
  }

  public getCurrentBookToEdit(): Book {
    return this.currentBookToEdit;
  }
}
